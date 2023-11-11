import { Router } from "express";
import { createProductStoreController } from "../controllers";
import {
  validateBodyMiddleware,
  validatePriceOfProductMiddleware,
  verifyProductExistMiddleware,
  verifyStoreExistMiddleware,
} from "../middlewares";
import { ProductStoreRequestSchema } from "../schemas";

const productStoreRouter = Router();

productStoreRouter.post(
  "/:productId/:storeId",
  validateBodyMiddleware(ProductStoreRequestSchema),
  validatePriceOfProductMiddleware,
  verifyProductExistMiddleware,
  verifyStoreExistMiddleware,
  createProductStoreController
);

export default productStoreRouter;
