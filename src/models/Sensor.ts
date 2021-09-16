import { Schema, model } from "mongoose";

const SensorSchema = new Schema({
  name: String,
  value: Number,
  zfarming: String,
  createdAt: { type: Date, default: Date.now },
});

export default model("Sensor", SensorSchema);
