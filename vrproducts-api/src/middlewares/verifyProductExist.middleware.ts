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
  if (!Number.isInteger(parseInt(req.params.id))) {
    throw new appError("The id passed is not an integer!");
  }

  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  const isProductExists = await productRepo.findOneBy({
    id: parseInt(req.params.id),
  });

  if (!isProductExists) {
    throw new appError("Product does not exists!", 404);
  }

  return next();
};

export default verifyProductExistMiddleware;
