import { Request, Response, Router } from "express";

import User from "../models/user";

class FarmRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    const users = await User.find();
    res.json({ users });
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    const user = await User.find({ url: { $regex: req.params.url } });
    res.json(user);
  }
  public async createUsers(req: Request, res: Response): Promise<void> {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ status: res.status, data: newUser });
  }

  public async updateUsers(req: Request, res: Response): Promise<void> {
    const { url } = req.params;
    const user = await User.findOneAndUpdate({ url }, req.body);
    res.json({ status: res.status, data: user });
  }

  public async deleteUsers(req: Request, res: Response): Promise<void> {
    await User.findOneAndRemove({ url: req.params.url });
    res.json({ response: "Post deleted Successfully" });
  }

  routes(): void {
    this.router.get("/", this.getUsers);
    this.router.get("/:url", this.getUsers);
    this.router.post("/", this.createUsers);
    this.router.put("/:url", this.updateUsers);
    this.router.delete("/:url", this.deleteUsers);
  }
}

const farmRoutes = new FarmRoutes();
farmRoutes.routes();

export default farmRoutes.router;
