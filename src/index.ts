import { Aplication } from "./app";
import database from "./config/database";

const aplication = new Aplication();

database();

aplication.starServer();
