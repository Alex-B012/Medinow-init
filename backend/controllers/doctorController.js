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
      .select(["-email", "-__v -date -createdAt -updatedAt"]);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { changeAvailability, getDoctorList };
