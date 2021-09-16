import { Schema, model } from "mongoose";

const FarmSchema = new Schema({
  name: String,
  location: String,
  Plant: [{ type: Schema.Types.ObjectId, ref: "Plant" }],
  zfarmings: [{ type: Schema.Types.ObjectId, ref: "Zfarming" }],
  createdAt: { type: Date, default: Date.now },
});

export default model("Farm", FarmSchema);
