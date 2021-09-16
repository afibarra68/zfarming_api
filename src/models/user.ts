import { Schema, model } from "mongoose";

const User = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  documentType: String,
  documentNumber: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});

export default model("User", User);
