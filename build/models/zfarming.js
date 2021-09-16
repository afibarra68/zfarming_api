"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Zfarming = new mongoose_1.Schema({
    name: String,
    dataTracking: String,
    user: String,
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Zfarming", Zfarming);
