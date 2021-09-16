import { Request, Response, Router } from "express";

import Plant from "../models/plant";

class FarmRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getPlants(req: Request, res: Response): Promise<void> {
    const plants = await Plant.find();
    res.json(plants);
  }

  public async getPlant(req: Request, res: Response): Promise<void> {
    const plant = await Plant.find({ url: { $regex: req.params.url } });
    res.json(plant);
  }
  public async createPlant(req: Request, res: Response): Promise<void> {
    const newPlant = new Plant(req.body);
    await newPlant.save();
    res.json({ status: res.status, newPlant });
  }

  public async updatePlant(req: Request, res: Response): Promise<void> {
    const { url } = req.params;
    const plant = await Plant.findOneAndUpdate({ url }, req.body);
    res.json({ status: res.status, plant });
  }

  public async deletePlant(req: Request, res: Response): Promise<void> {
    await Plant.findOneAndRemove({ _id: req.params._id });
    res.json({ response: "Post deleted Successfully" });
  }

  routes(): void {
    this.router.get("/", this.getPlants);
    this.router.get("/:url", this.getPlant);
    this.router.post("/", this.createPlant);
    this.router.put("/:url", this.updatePlant);
    this.router.delete("/:_id", this.deletePlant);
  }
}

const farmRoutes = new FarmRoutes();
farmRoutes.routes();

export default farmRoutes.router;
