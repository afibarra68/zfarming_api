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
const plant_1 = __importDefault(require("../models/plant"));
class FarmRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getPlants(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const plants = yield plant_1.default.find();
            res.json(plants);
        });
    }
    getPlant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const plant = yield plant_1.default.find({ url: { $regex: req.params.url } });
            res.json(plant);
        });
    }
    createPlant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPlant = new plant_1.default(req.body);
            yield newPlant.save();
            res.json({ status: res.status, newPlant });
        });
    }
    updatePlant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = req.params;
            const plant = yield plant_1.default.findOneAndUpdate({ url }, req.body);
            res.json({ status: res.status, plant });
        });
    }
    deletePlant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield plant_1.default.findOneAndRemove({ _id: req.params._id });
            res.json({ response: "Post deleted Successfully" });
        });
    }
    routes() {
        this.router.get("/", this.getPlants);
        this.router.get("/:url", this.getPlant);
        this.router.post("/", this.createPlant);
        this.router.put("/:url", this.updatePlant);
        this.router.delete("/:_id", this.deletePlant);
    }
}
const farmRoutes = new FarmRoutes();
farmRoutes.routes();
exports.default = farmRoutes.router;
