import express from "express";
import {
  getDoctorList,
  getDoctor,
  loginDoctor,
} from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", getDoctorList);
doctorRouter.get("/get-doctor/:docId", getDoctor);
doctorRouter.post("/login", loginDoctor);

export default doctorRouter;
