import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

const password_length = Number(process.env.PASSWORD_VALID_LENGTH);
const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS);
const INVALID_CREDENTIALS = "Invalid credentials";
// API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !password || !email)
      return res
        .status(400)
        .json({ success: false, message: "Missing Details" });

    if (!validator.isEmail(email))
      return res
        .status(400)
        .json({ success: false, message: "Enter a valid email" });

    if (password.length < password_length)
      return res
        .status(400)
        .json({ success: false, message: "Enter a strong password" });

    //hashing user password
    const salt = await bcrypt.genSalt(BCRYPT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
      date: Date.now(),
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("email, password", email, password);

    const user = await userModel.findOne({ email });

    if (!user)
      return res
        .status(401)
        .json({ success: false, message: INVALID_CREDENTIALS });

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.status(401).json({ success: false, message: INVALID_CREDENTIALS });
    }
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to get user profile data (GET method)
const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("userId", userId);

    const userData = await userModel
      .findById(userId)
      .select("-password -__v -date -createdAt -updatedAt");
    console.log("userData", userData);

    res.json({ success: true, userData });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to update user profile

const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if ([userId, name, phone, address, dob, gender].some((field) => !field))
      return res.status(400).json({ success: false, message: "Data Missing" });

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address,
      dob,
      gender,
    });

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageURL = imageUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }

    res.json({ success: true, message: "Profile updated" });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, getProfile, updateProfile };
