"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AppRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getIndex(req, res) {
        res.json("Api: /api/posts");
    }
    routes() {
        this.router.get("/", this.getIndex);
    }
}
const appRoutes = new AppRoutes();
appRoutes.routes();
exports.default = appRoutes.router;
