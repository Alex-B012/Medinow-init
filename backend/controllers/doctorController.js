import doctorModel from "../models/doctorModel.js";
import { handleServerError } from "../utils/utils.js";

const changeAvailability = async (req, res) => {
  console.log("changeAvailability");
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

const getDoctorList = async (req, res) => {
  console.log("getDoctorList");
  try {
    const doctors = await doctorModel
      .find({})
      .select("-email -password -__v -date -createdAt -updatedAt");

    res.json({ success: true, doctors });
  } catch (error) {
    handleServerError(res, error);
  }
};

const getDoctor = async (req, res) => {
  try {
    const { docId } = req.params;

    const doctor = await doctorModel
      .findById(docId)
      .select("-email -password -__v -date -createdAt -updatedAt");

    res.json({ success: true, doctor });
  } catch (error) {
    handleServerError(res, error);
  }
};

export { changeAvailability, getDoctorList, getDoctor };
