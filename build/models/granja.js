"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GranjaSchema = new mongoose_1.Schema({
    name: String,
    location: String,
    Farm: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Farm" }],
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Granja", GranjaSchema);
