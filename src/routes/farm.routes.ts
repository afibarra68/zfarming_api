import { Request, Response, Router } from "express";

import Farm from "../models/farm";

class FarmRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getfarms(req: Request, res: Response): Promise<void> {
    const farms = await Farm.find();
    res.json(farms);
  }

  public async getFarm(req: Request, res: Response): Promise<void> {
    const farm = await Farm.find({ url: { $regex: req.params.url } });
    res.json(farm);
  }
  public async createFarm(req: Request, res: Response): Promise<void> {
    const newFarm = new Farm(req.body);
    await newFarm.save();
    res.json({ status: res.status, newFarm });
  }

  public async updateFarm(req: Request, res: Response): Promise<void> {
    const { url } = req.params;
    const farm = await Farm.findOneAndUpdate({ url }, req.body);
    res.json({ status: res.status, farm });
  }

  public async deleteFarm(req: Request, res: Response): Promise<void> {
    await Farm.findOneAndRemove({ url: req.params.url });
    res.json({ response: "exit on the operation" });
  }

  routes(): void {
    this.router.get("/", this.getfarms);
    this.router.get("/:url", this.getFarm);
    this.router.post("/", this.createFarm);
    this.router.put("/:url", this.updateFarm);
    this.router.delete("/:url", this.deleteFarm);
  }
}

const farmRoutes = new FarmRoutes();
farmRoutes.routes();

export default farmRoutes.router;
