import { Request, Response, Router } from "express";

import Granja from "../models/granja";

class FarmRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getfarms(req: Request, res: Response): Promise<void> {
    const granja = await Granja.find();
    res.json({ granja });
  }

  public async getFarm(req: Request, res: Response): Promise<void> {
    const granja = await Granja.find({ url: { $regex: req.params.url } });
    res.json(granja);
  }
  public async createFarm(req: Request, res: Response): Promise<void> {
    const newgranja = new Granja(req.body);
    await newgranja.save();
    res.json({ status: res.status, newgranja });
  }

  public async updateFarm(req: Request, res: Response): Promise<void> {
    const { url } = req.params;
    const post = await Granja.findOneAndUpdate({ url }, req.body);
    res.json({ status: res.status, data: post });
  }

  public async deleteFarm(req: Request, res: Response): Promise<void> {
    await Granja.findOneAndRemove({ url: req.params.url });
    res.json({ response: "Post deleted Successfully" });
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
