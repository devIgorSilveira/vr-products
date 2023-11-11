import { Router } from "express";
import {
  createProductStoreController,
  deleteProductStoreController,
  updateProductStoreController,
} from "../controllers";
import {
  validateBodyMiddleware,
  validatePriceOfProductMiddleware,
  verifyProductExistMiddleware,
  verifyProductStoreExistMiddleware,
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

productStoreRouter.patch(
  "/:id",
  validateBodyMiddleware(ProductStoreRequestSchema),
  validatePriceOfProductMiddleware,
  verifyProductStoreExistMiddleware,
  updateProductStoreController
);

productStoreRouter.delete(
  "/:id",
  verifyProductStoreExistMiddleware,
  deleteProductStoreController
);

export default productStoreRouter;
