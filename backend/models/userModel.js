import mongoose from "mongoose";
import { person_default } from "../assets/images.js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, default: person_default },
  image_id: { type: String },
  address: { type: Object, default: { line1: "", line2: "" } },
  gender: { type: String, default: "Not Selected" },
  dob: { type: String, default: "Not Selected" },
  phone: { type: String, default: "00000000000" },
  date: { type: Number, required: true },
});

userSchema.index({ email: 1 }, { unique: true });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
