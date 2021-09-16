import { Request, Response, Router } from "express";

import Zfarming from "../models/zfarming";

class ZfarmingRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getZfarmings(req: Request, res: Response): Promise<void> {
    const zfarming = await Zfarming.find();
    res.json({ zfarming });
  }

  public async getZfarming(req: Request, res: Response): Promise<void> {
    const zfarming = await Zfarming.find({ url: { $regex: req.params.url } });
    res.json(zfarming);
  }
  public async createZfarming(req: Request, res: Response): Promise<void> {
    const newzf = new Zfarming(req.body);
    await newzf.save();
    res.json({ status: res.status, data: newzf });
  }

  public async updateZfarming(req: Request, res: Response): Promise<void> {
    const { url } = req.params;
    const zf = await Zfarming.findOneAndUpdate({ url }, req.body);
    res.json({ status: res.status, data: zf });
  }

  public async deleteZfarming(req: Request, res: Response): Promise<void> {
    await Zfarming.findOneAndRemove({ url: req.params.url });
    res.json({ response: "Post deleted Successfully" });
  }

  routes(): void {
    this.router.get("/", this.getZfarmings);
    this.router.get("/:url", this.getZfarming);
    this.router.post("/", this.createZfarming);
    this.router.put("/:url", this.updateZfarming);
    this.router.delete("/:url", this.deleteZfarming);
  }
}

const zfarmingRoutes = new ZfarmingRoutes();
zfarmingRoutes.routes();

export default zfarmingRoutes.router;
