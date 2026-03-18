import doctorModel from "../models/doctorModel.js";

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
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
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
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
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
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { changeAvailability, getDoctorList, getDoctor };
