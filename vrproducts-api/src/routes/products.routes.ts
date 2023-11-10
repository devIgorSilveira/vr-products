import { Router } from "express";
import {
  createProductController,
  getAllProductsController,
} from "../controllers";
import {
  validateBodyMiddleware,
  validatePriceOfProductMiddleware,
} from "../middlewares";
import { productRequestSchema } from "../schemas";

const productRouter = Router();

productRouter.get("", getAllProductsController);

productRouter.post(
  "",
  validateBodyMiddleware(productRequestSchema),
  validatePriceOfProductMiddleware,
  createProductController
);

export default productRouter;
