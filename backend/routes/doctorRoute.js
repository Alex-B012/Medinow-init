import express from "express";
import { getDoctorList, getDoctor } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", getDoctorList);
doctorRouter.get("/get-doctor/:docId", getDoctor);

export default doctorRouter;
