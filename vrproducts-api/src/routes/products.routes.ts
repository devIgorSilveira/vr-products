import { Router } from "express";
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
} from "../controllers";
import {
  validateBodyMiddleware,
  validatePriceOfProductMiddleware,
  verifyProductExistMiddleware,
} from "../middlewares";
import { productRequestSchema } from "../schemas";

const productRouter = Router();

productRouter.get("", getAllProductsController);

productRouter.get(
  "/:id",
  verifyProductExistMiddleware,
  getProductByIdController
);

productRouter.post(
  "",
  validateBodyMiddleware(productRequestSchema),
  validatePriceOfProductMiddleware,
  createProductController
);

export default productRouter;
