import bcrypt from "bcrypt";
import { handleServerError } from "../utils/utils.js";
import validateDoctorData from "../utils/utilsDoctor.js";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";

import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS);

//API to add a doctor
const addDoctor = async (req, res) => {
  console.log("AddDoctor");
  try {
    const {
      name,
      email,
      password,
      specialty,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imageFile = req.file;

    const validation = validateDoctorData(req.body);

    if (!validation.isValid) {
      return res.json({
        success: false,
        message: validation.message,
      });
    }

    const salt = await bcrypt.genSalt(BCRYPT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      specialty,
      degree,
      experience,
      about,
      fees: Number(fees),
      address: JSON.parse(address),
      date: Date.now(),
    };

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;
      doctorData.image = imageUrl;
    }

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor added" });
  } catch (error) {
    handleServerError(res, error);
  }
};

//API for admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    handleServerError(res, error);
  }
};

//API to fetch all doctors for the admin panel
const getAllDoctors = async (req, res) => {
  console.log("getAllDoctors");
  try {
    const doctors = await doctorModel
      .find({})
      .select("-password -__v -date -createdAt -updatedAt");
    res.json({ success: true, doctors });
  } catch (error) {
    handleServerError(res, error);
  }
};

//API to get all appointments list
const appointmentsAdmin = async (req, res) => {
  console.log("appointmentsAdmin - start");
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, appointments });
  } catch (error) {
    handleServerError(res, error);
  }
};

export { addDoctor, loginAdmin, getAllDoctors, appointmentsAdmin };
