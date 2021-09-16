"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    documentType: String,
    documentNumber: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("User", User);
