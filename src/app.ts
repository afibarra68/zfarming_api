import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

import SensorRoutes from "./routes/sensor.routes";
import zfarmingRoutes from "./routes/zfarming.routes";
import userRoutes from "./routes/user.routes";
import farmRoutes from "./routes/farm.routes";
import granjaRoutes from "./routes/granja.routes";
import plantRoutes from "./routes/plant.routes";
import ListRoutes from "./routes/List.routes";

class Aplication {
  app: express.Application;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
  }

  public config(): void {
    // Settings
    this.app.set("port", process.env.PORT || 3000);
    // middlewares
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use("/doc", ListRoutes);
    this.app.use("/zf/farms/", farmRoutes);
    this.app.use("/zf/granjas/", granjaRoutes);
    this.app.use("/api/plants/", plantRoutes);
    this.app.use("/zf/sensor/", SensorRoutes);
    this.app.use("/zf/machines/", zfarmingRoutes);
    this.app.use("/zf/users/", userRoutes);
  }

  public starServer(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("server running on port ", this.app.get("port"));
    });
  }
}

export { Aplication };
