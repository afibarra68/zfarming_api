"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlantSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)("Plant", PlantSchema);
