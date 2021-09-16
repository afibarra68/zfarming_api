"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zfarming_1 = __importDefault(require("../models/zfarming"));
class ZfarmingRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getZfarmings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const zfarming = yield zfarming_1.default.find();
            res.json({ zfarming });
        });
    }
    getZfarming(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const zfarming = yield zfarming_1.default.find({ url: { $regex: req.params.url } });
            res.json(zfarming);
        });
    }
    createZfarming(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newzf = new zfarming_1.default(req.body);
            yield newzf.save();
            res.json({ status: res.status, data: newzf });
        });
    }
    updateZfarming(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = req.params;
            const zf = yield zfarming_1.default.findOneAndUpdate({ url }, req.body);
            res.json({ status: res.status, data: zf });
        });
    }
    deleteZfarming(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield zfarming_1.default.findOneAndRemove({ url: req.params.url });
            res.json({ response: "Post deleted Successfully" });
        });
    }
    routes() {
        this.router.get("/", this.getZfarmings);
        this.router.get("/:url", this.getZfarming);
        this.router.post("/", this.createZfarming);
        this.router.put("/:url", this.updateZfarming);
        this.router.delete("/:url", this.deleteZfarming);
    }
}
const zfarmingRoutes = new ZfarmingRoutes();
zfarmingRoutes.routes();
exports.default = zfarmingRoutes.router;
