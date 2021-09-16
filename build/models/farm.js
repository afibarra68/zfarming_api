"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FarmSchema = new mongoose_1.Schema({
    name: String,
    location: String,
    Plant: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Plant" }],
    zfarmings: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Zfarming" }],
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Farm", FarmSchema);
