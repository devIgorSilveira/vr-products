import { Router } from "express";
import { createProductController } from "../controllers";

const productRouter = Router();

productRouter.post("", createProductController);

export default productRouter;
