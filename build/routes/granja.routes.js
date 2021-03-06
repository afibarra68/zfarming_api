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
const granja_1 = __importDefault(require("../models/granja"));
class FarmRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getfarms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const granja = yield granja_1.default.find();
            res.json({ granja });
        });
    }
    getFarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const granja = yield granja_1.default.find({ url: { $regex: req.params.url } });
            res.json(granja);
        });
    }
    createFarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newgranja = new granja_1.default(req.body);
            yield newgranja.save();
            res.json({ status: res.status, newgranja });
        });
    }
    updateFarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = req.params;
            const post = yield granja_1.default.findOneAndUpdate({ url }, req.body);
            res.json({ status: res.status, data: post });
        });
    }
    deleteFarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield granja_1.default.findOneAndRemove({ url: req.params.url });
            res.json({ response: "Post deleted Successfully" });
        });
    }
    routes() {
        this.router.get("/", this.getfarms);
        this.router.get("/:url", this.getFarm);
        this.router.post("/", this.createFarm);
        this.router.put("/:url", this.updateFarm);
        this.router.delete("/:url", this.deleteFarm);
    }
}
const farmRoutes = new FarmRoutes();
farmRoutes.routes();
exports.default = farmRoutes.router;
