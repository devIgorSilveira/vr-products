import { Router } from "express";
import { createProductController } from "../controllers";
import { validateBodyMiddleware } from "../middlewares";
import { productRequestSchema } from "../schemas";

const productRouter = Router();

productRouter.post(
  "",
  validateBodyMiddleware(productRequestSchema),
  createProductController
);

export default productRouter;
