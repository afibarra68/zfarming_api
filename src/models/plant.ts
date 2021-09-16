import { Schema, model } from "mongoose";

const PlantSchema = new Schema({
  commonName: String,
  CientificName: String,
  vulgarName: String,
  characteristics: String,
  image: String,

  calEnergy: String,
  proteins: String,
  fats: String,
  sugars: String,
  fiber: String,

  //ranges

  minimumPH: String,
  maximumPH: String,

  minimumWetness: String,
  maximumWetness: String,

  minimumLighting: String,
  maximumLighting: String,

  minimumTemperature: String,
  maximumTemperature: String,

  minimumElectroconductivity: String,
  maximumElectroconductivity: String,

  //climate variables

  minimumPV: String,
  maximumPV: String,

  minimumPlantSize: String,
  maximumPlantSize: String,

  minimumLightingTime: String,
  maximumLightingTime: String,

  minimumReqHydric: String,
  maximumReqHydric: String,

  createdAt: { type: Date, default: Date.now },
});

export default model("Plant", PlantSchema);
