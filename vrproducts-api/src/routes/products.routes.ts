import { Router } from "express";
import { createProductController } from "../controllers";
import {
  validateBodyMiddleware,
  validatePriceOfProductMiddleware,
} from "../middlewares";
import { productRequestSchema } from "../schemas";

const productRouter = Router();

productRouter.post(
  "",
  validateBodyMiddleware(productRequestSchema),
  validatePriceOfProductMiddleware,
  createProductController
);

export default productRouter;
