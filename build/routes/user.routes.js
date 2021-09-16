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
const user_1 = __importDefault(require("../models/user"));
class FarmRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.default.find();
            res.json({ users });
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.find({ url: { $regex: req.params.url } });
            res.json(user);
        });
    }
    createUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new user_1.default(req.body);
            yield newUser.save();
            res.json({ status: res.status, data: newUser });
        });
    }
    updateUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = req.params;
            const user = yield user_1.default.findOneAndUpdate({ url }, req.body);
            res.json({ status: res.status, data: user });
        });
    }
    deleteUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_1.default.findOneAndRemove({ url: req.params.url });
            res.json({ response: "Post deleted Successfully" });
        });
    }
    routes() {
        this.router.get("/", this.getUsers);
        this.router.get("/:url", this.getUsers);
        this.router.post("/", this.createUsers);
        this.router.put("/:url", this.updateUsers);
        this.router.delete("/:url", this.deleteUsers);
    }
}
const farmRoutes = new FarmRoutes();
farmRoutes.routes();
exports.default = farmRoutes.router;
