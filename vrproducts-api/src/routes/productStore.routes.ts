import { Router } from "express";
import {
  createProductStoreController,
  deleteProductStoreController,
  getProductStoreOfOneProductController,
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

productStoreRouter.get(
  "/:id",
  verifyProductExistMiddleware,
  getProductStoreOfOneProductController
);

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
