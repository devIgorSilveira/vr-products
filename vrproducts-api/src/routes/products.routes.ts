import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from "../controllers";
import {
  validateBodyMiddleware,
  validatePriceOfProductMiddleware,
  verifyProductExistMiddleware,
} from "../middlewares";
import { productRequestSchema, productUpdateSchema } from "../schemas";

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

productRouter.patch(
  "/:id",
  verifyProductExistMiddleware,
  validateBodyMiddleware(productUpdateSchema),
  updateProductController
);

productRouter.delete(
  "/:id",
  verifyProductExistMiddleware,
  deleteProductController
);

export default productRouter;
