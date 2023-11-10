import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares";
import { storeRequestSchema } from "../schemas";
import { createStoreController } from "../controllers";

const storeRouter = Router();

storeRouter.post(
  "",
  validateBodyMiddleware(storeRequestSchema),
  createStoreController
);

export default storeRouter;
