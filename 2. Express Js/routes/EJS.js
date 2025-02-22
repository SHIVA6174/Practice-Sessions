import express from "express";
import { HomePage, AboutPage } from "../controllers/EJS.controllers.js";

const EjsRouter = express.Router();

EjsRouter.get("/home", HomePage);
EjsRouter.get("/about", AboutPage);

export default EjsRouter;
