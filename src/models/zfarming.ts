import { Schema, model } from "mongoose";

const Zfarming = new Schema({
  name: String,
  dataTracking: String, //rastreador
  user: String,
  createdAt: { type: Date, default: Date.now },
});

export default model("Zfarming", Zfarming);
