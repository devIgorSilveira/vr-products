import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares";
import { storeRequestSchema } from "../schemas";
import { createStoreController, getAllStoresController } from "../controllers";

const storeRouter = Router();

storeRouter.get("", getAllStoresController);

storeRouter.post(
  "",
  validateBodyMiddleware(storeRequestSchema),
  createStoreController
);

export default storeRouter;
