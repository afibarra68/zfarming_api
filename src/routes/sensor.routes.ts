import { Request, Response, Router } from "express";

import Sensor from "../models/Sensor";

class SensorRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getSensor(req: Request, res: Response): Promise<void> {
    const sensor = await Sensor.find();
    res.json({ sensor });
  }

  public async getSensors(req: Request, res: Response): Promise<void> {
    const post = await Sensor.find({ url: { $regex: req.params.url } });
    res.json(post);
  }
  public async createSensor(req: Request, res: Response): Promise<void> {
    const { name, value, zfarming } = req.body;
    const newSensor = new Sensor({ name, value, zfarming });
    await newSensor.save();
    res.json({ status: res.status, data: newSensor });
  }

  public async updateSensor(req: Request, res: Response): Promise<void> {
    const { url } = req.params;
    const post = await Sensor.findOneAndUpdate({ url }, req.body);
    res.json({ status: res.status, data: post });
  }

  public async deleteSensor(req: Request, res: Response): Promise<void> {
    await Sensor.findOneAndRemove({ url: req.params.url });
    res.json({ response: "Post deleted Successfully" });
  }

  //TODO: METHOD GET PARA RECIBIR 6 VARIABLES (A-F) QUERYPARAM
  //TODO: RECIBIR VARIABLE DE ID DE DISPOSITIVO.
  // RESULTADO DE PETICION // RETURN STRING CONTENTYPE APLICATION/TEXT (ok)

  routes(): void {
    this.router.get("/", this.getSensors);
    this.router.get("/:url", this.getSensor);
    this.router.post("/", this.createSensor);
    this.router.put("/:url", this.updateSensor);
    this.router.delete("/:url", this.deleteSensor);
  }
}

const sensorRoutes = new SensorRoutes();
sensorRoutes.routes();

export default sensorRoutes.router;
