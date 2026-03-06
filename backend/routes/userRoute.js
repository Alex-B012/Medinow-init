import express from "express";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", authUser, getProfile);
userRouter.put("/profile", authUser, upload.single("image"), updateProfile);

export default userRouter;

// 9:45:44
