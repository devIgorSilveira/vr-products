import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Product } from "../entities";
import appDataSource from "../data-source";
import { appError } from "../errors/handleErrors";

const verifyProductExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id || req.params.productId;

  if (!Number.isInteger(parseInt(id))) {
    throw new appError("The id passed is not an integer!");
  }

  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  const isProductExists = await productRepo.findOneBy({
    id: parseInt(id),
  });

  if (!isProductExists) {
    throw new appError("Product does not exists!", 404);
  }

  return next();
};

export default verifyProductExistMiddleware;
