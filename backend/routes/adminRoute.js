import express from "express";
import {
  addDoctor,
  appointmentsAdmin,
  getAllDoctors,
  loginAdmin,
  appointmentCancelAdmin,
} from "../controllers/adminController.js";
import { changeAvailability } from "../controllers/doctorController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/all-doctors", authAdmin, getAllDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);
adminRouter.post("/all-appointments", authAdmin, appointmentsAdmin);
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancelAdmin);

export default adminRouter;
