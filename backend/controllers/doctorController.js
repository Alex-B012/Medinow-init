import appointmentModel from "../models/appointmentModel.js";
import doctorModel from "../models/doctorModel.js";
import { handleServerError } from "../utils/utils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const EXCLUDED_DATA = "-__v -date -createdAt -updatedAt";

// API for fetching all doctors
const getDoctorList = async (req, res) => {
  console.log("getDoctorList - start");

  try {
    const doctors = await doctorModel
      .find({})
      .select(`-email -password ${EXCLUDED_DATA}`);

    res.json({ success: true, doctors });
  } catch (error) {
    handleServerError(res, error);
  }
};

// API to retrieve data for the selected doctor
const getDoctor = async (req, res) => {
  console.log("getDoctor - start");

  try {
    const { docId } = req.params;

    const doctor = await doctorModel
      .findById(docId)
      .select(`-email -password ${EXCLUDED_DATA}`);

    res.json({ success: true, doctor });
  } catch (error) {
    handleServerError(res, error);
  }
};

// API to change the availability of the selected doctor
const changeAvailability = async (req, res) => {
  console.log("changeAvailability - start");

  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availability Changed" });
  } catch (error) {
    handleServerError(res, error);
  }
};

//API for doctor Login
const loginDoctor = async (req, res) => {
  console.log("loginDoctor - start");

  try {
    const { email, password } = req.body;
    const doctor = await doctorModel.findOne({ email }).select("_id password");

    if (!doctor)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (isMatch) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    handleServerError(res, error);
  }
};

// API to get doctor appointments for doctor panel
const appointmentsDoctor = async (req, res) => {
  console.log("appointmentsDoctor - start");

  try {
    const { docId } = req;
    const appointments = await appointmentModel
      .find({ docId })
      .select(EXCLUDED_DATA);

    res.json({ success: true, appointments });
  } catch (error) {
    handleServerError(res, error);
  }
};

export {
  changeAvailability,
  getDoctorList,
  getDoctor,
  loginDoctor,
  appointmentsDoctor,
};
