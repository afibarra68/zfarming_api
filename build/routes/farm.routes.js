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
const farm_1 = __importDefault(require("../models/farm"));
class FarmRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getfarms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const farms = yield farm_1.default.find();
            res.json(farms);
        });
    }
    getFarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const farm = yield farm_1.default.find({ url: { $regex: req.params.url } });
            res.json(farm);
        });
    }
    createFarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newFarm = new farm_1.default(req.body);
            yield newFarm.save();
            res.json({ status: res.status, newFarm });
        });
    }
    updateFarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = req.params;
            const farm = yield farm_1.default.findOneAndUpdate({ url }, req.body);
            res.json({ status: res.status, farm });
        });
    }
    deleteFarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield farm_1.default.findOneAndRemove({ url: req.params.url });
            res.json({ response: "exit on the operation" });
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
