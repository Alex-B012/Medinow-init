import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

const PASSWORD_LENGTH = Number(process.env.PASSWORD_VALID_LENGTH);
const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS);
const INVALID_CREDENTIALS = "Invalid credentials";
const EXCLUDED_FIELDS = "-password -__v -date -createdAt -updatedAt";

// API to register user
const registerUser = async (req, res) => {
  console.log("registerUser");
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

    if (password.length < PASSWORD_LENGTH)
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
  console.log("loginUser");
  try {
    const { email, password } = req.body;
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
  console.log("getProfile");
  try {
    const userId = req.userId;

    const userData = await userModel.findById(userId).select(EXCLUDED_FIELDS);

    res.json({ success: true, userData });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to update user profile
const updateProfile = async (req, res) => {
  console.log("updateProfile");
  try {
    const { name, phone, address, dob, gender } = req.body;
    const { userId } = req;
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

// API to book an appointment
const bookAppointment = async (req, res) => {
  console.log("bookAppointment");
  try {
    const { docId, slotDate, slotTime } = req.body;
    const { userId } = req;
    const docData = await doctorModel.findById(docId).select(EXCLUDED_FIELDS);

    if (!docData.available) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not available" });
    }

    let slots_booked = docData.slots_booked;

    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res
          .status(409)
          .json({ success: false, message: "Slot not available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    const userData = await userModel.findById(userId).select(EXCLUDED_FIELDS);

    delete docData.slots_booked;

    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Booked" });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// API to get user appointments for frontend My Appointments page
const listAppointments = async (req, res) => {
  console.log("listAppointments");
  try {
    const { userId } = req;
    const appointments = await appointmentModel.find({ userId });

    res.json({ success: true, appointments });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// API to cancel an appointment on the My Appointments page

const cancelAppointment = async (req, res) => {
  console.log("cancelAppointment");
  try {
    const { userId } = req;
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (appointmentData.userId !== userId)
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized action" });

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);

    let slots_booked = doctorData.slots_booked;

    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e != slotTime,
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
export {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointments,
  cancelAppointment,
};
