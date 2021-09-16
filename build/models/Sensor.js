"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SensorSchema = new mongoose_1.Schema({
    name: String,
    value: Number,
    zfarming: String,
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Sensor", SensorSchema);
