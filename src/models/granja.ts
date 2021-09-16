import { Schema, model } from "mongoose";

const GranjaSchema = new Schema({
  name: String,
  location: String,
  Farm: [{ type: Schema.Types.ObjectId, ref: "Farm" }],
  createdAt: { type: Date, default: Date.now },
});

export default model("Granja", GranjaSchema);
