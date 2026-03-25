import bcrypt from "bcrypt";
import { handleServerError } from "../utils/utils.js";
import validateDoctorData from "../utils/utilsDoctor.js";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";

import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS);
const CLOUDINARY_PROJECT_NAME = process.env.CLOUDINARY_PROJECT_NAME;
const EXCLUDED_DATA = "-__v -date -createdAt -updatedAt";

//API to add a doctor
const addDoctor = async (req, res) => {
  if (process.env.NODE_ENV) console.log("addDoctor - start");

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
        folder: `${CLOUDINARY_PROJECT_NAME}/doctors`,
      });

      doctorData.image_id = imageUpload.public_id;
      doctorData.image = imageUpload.secure_url;
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
  if (process.env.NODE_ENV) console.log("loginAdmin - start");

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
  if (process.env.NODE_ENV) console.log("getAllDoctors - start");

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
  if (process.env.NODE_ENV) console.log("appointmentsAdmin - start");

  try {
    const appointments = await appointmentModel.find({}).select(EXCLUDED_DATA);
    res.json({ success: true, appointments });
  } catch (error) {
    handleServerError(res, error);
  }
};

// API to set an appointment status to completed in the admin panel
const appointmentCompleteAdmin = async (req, res) => {
  if (process.env.NODE_ENV) console.log("appointmentCompleteAdmin - start");

  try {
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel
      .findById(appointmentId)
      .select(EXCLUDED_DATA);

    if (appointmentData) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        isCompleted: true,
      });
      res.json({ success: true, message: "Appointment Completed" });
    } else {
      res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }
  } catch (error) {
    handleServerError(res, error);
  }
};

//API for appointment cancellation
const appointmentCancelAdmin = async (req, res) => {
  if (process.env.NODE_ENV) console.log("cancelAppointmentAdmin - start");

  try {
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel
      .findById(appointmentId)
      .select(EXCLUDED_DATA);

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel
      .findById(docId)
      .select("-password -__v -date -createdAt -updatedAt");

    let slots_booked = doctorData.slots_booked;

    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e != slotTime,
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    handleServerError(res, error);
  }
};

//API to get dashboard data for Admin panel
const adminDashboard = async (req, res) => {
  if (process.env.NODE_ENV) console.log("adminDashboard - start");

  try {
    const doctors = await doctorModel
      .find({})
      .select("-password -__v -date -createdAt -updatedAt");

    const users = await userModel
      .find({})
      .select("-password -__v -date -createdAt -updatedAt");

    const appointments = await appointmentModel.find({}).select(EXCLUDED_DATA);

    const dashboardData = {
      doctors: doctors.length,
      appointments: appointments.length,
      patients: users.length,
      latestAppointments: [...appointments].reverse().slice(0, 5),
    };
    res.json({ success: true, dashboardData });
  } catch (error) {
    handleServerError(res, error);
  }
};

export {
  addDoctor,
  loginAdmin,
  getAllDoctors,
  appointmentsAdmin,
  appointmentCancelAdmin,
  appointmentCompleteAdmin,
  adminDashboard,
};
