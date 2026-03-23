import express from "express";
import {
  getDoctorList,
  getDoctor,
  loginDoctor,
  appointmentsDoctor,
  appointmentCompleteDoctor,
  cancelAppointmentDoctor,
  doctorDashboard,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", getDoctorList);
doctorRouter.get("/get-doctor/:docId", getDoctor);
doctorRouter.post("/login", loginDoctor);
doctorRouter.post("/doctor-appointments", authDoctor, appointmentsDoctor);
doctorRouter.post(
  "/complete-appointment",
  authDoctor,
  appointmentCompleteDoctor,
);
doctorRouter.post("/cancel-appointment", authDoctor, cancelAppointmentDoctor);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);

export default doctorRouter;
