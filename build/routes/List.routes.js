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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ListRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getListApi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiList = [
                {
                    data: "Lista de rutas del server para el manejo de la informacion de la api ",
                    farmRoutes: "/zf/farms/",
                    granjaRoutes: "/zf/granjas/",
                    plantRoutes: "/api/plants/",
                    SensorRoutes: "/zf/sensor/",
                    zfarmingRoutes: "/zf/machines/",
                    userRoutes: "/zf/users/",
                },
                {
                    data: "rest from user",
                    firstName: "String",
                    lastName: "String",
                    email: "String",
                    username: "String",
                    password: "String",
                    documentType: "String",
                    documentNumber: "String",
                    image: "-url",
                },
            ];
            res.json({ apiList });
        });
    }
    routes() {
        this.router.get("/", this.getListApi);
    }
}
const listRoutes = new ListRoutes();
listRoutes.routes();
exports.default = listRoutes.router;
