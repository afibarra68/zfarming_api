import { Request, Response, Router } from "express";

class ListRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getListApi(req: Request, res: Response): Promise<void> {
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
  }

  routes(): void {
    this.router.get("/", this.getListApi);
  }
}

const listRoutes = new ListRoutes();
listRoutes.routes();

export default listRoutes.router;
