import { NextFunction, Request, Response } from "express";
import { appError } from "../errors/handleErrors";
import { Repository } from "typeorm";
import { ProductStore } from "../entities";
import appDataSource from "../data-source";

const verifyProductStoreExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!Number.isInteger(parseInt(req.params.id))) {
    throw new appError("The id passed is not an integer!");
  }

  const productStoreRepo: Repository<ProductStore> =
    appDataSource.getRepository(ProductStore);

  const isProductExists = await productStoreRepo.findOneBy({
    id: parseInt(req.params.id),
  });

  if (!isProductExists) {
    throw new appError("Registry dont founded!", 404);
  }

  return next();
};

export default verifyProductStoreExistMiddleware;
