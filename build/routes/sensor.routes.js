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
const Sensor_1 = __importDefault(require("../models/Sensor"));
class SensorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getSensor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sensor = yield Sensor_1.default.find();
            res.json({ sensor });
        });
    }
    getSensors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield Sensor_1.default.find({ url: { $regex: req.params.url } });
            res.json(post);
        });
    }
    createSensor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, value, zfarming } = req.body;
            const newSensor = new Sensor_1.default({ name, value, zfarming });
            yield newSensor.save();
            res.json({ status: res.status, data: newSensor });
        });
    }
    updateSensor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = req.params;
            const post = yield Sensor_1.default.findOneAndUpdate({ url }, req.body);
            res.json({ status: res.status, data: post });
        });
    }
    deleteSensor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Sensor_1.default.findOneAndRemove({ url: req.params.url });
            res.json({ response: "Post deleted Successfully" });
        });
    }
    //TODO: METHOD GET PARA RECIBIR 6 VARIABLES (A-F) QUERYPARAM
    //TODO: RECIBIR VARIABLE DE ID DE DISPOSITIVO.
    // RESULTADO DE PETICION // RETURN STRING CONTENTYPE APLICATION/TEXT (ok)
    routes() {
        this.router.get("/", this.getSensors);
        this.router.get("/:url", this.getSensor);
        this.router.post("/", this.createSensor);
        this.router.put("/:url", this.updateSensor);
        this.router.delete("/:url", this.deleteSensor);
    }
}
const sensorRoutes = new SensorRoutes();
sensorRoutes.routes();
exports.default = sensorRoutes.router;
