"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplication = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const sensor_routes_1 = __importDefault(require("./routes/sensor.routes"));
const zfarming_routes_1 = __importDefault(require("./routes/zfarming.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const farm_routes_1 = __importDefault(require("./routes/farm.routes"));
const granja_routes_1 = __importDefault(require("./routes/granja.routes"));
const plant_routes_1 = __importDefault(require("./routes/plant.routes"));
const List_routes_1 = __importDefault(require("./routes/List.routes"));
class Aplication {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        // Settings
        this.app.set("port", process.env.PORT || 3000);
        // middlewares
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        const router = express_1.default.Router();
        this.app.use("/doc", List_routes_1.default);
        this.app.use("/zf/farms/", farm_routes_1.default);
        this.app.use("/zf/granjas/", granja_routes_1.default);
        this.app.use("/api/plants/", plant_routes_1.default);
        this.app.use("/zf/sensor/", sensor_routes_1.default);
        this.app.use("/zf/machines/", zfarming_routes_1.default);
        this.app.use("/zf/users/", user_routes_1.default);
    }
    starServer() {
        this.app.listen(this.app.get("port"), () => {
            console.log("server running on port ", this.app.get("port"));
        });
    }
}
exports.Aplication = Aplication;
