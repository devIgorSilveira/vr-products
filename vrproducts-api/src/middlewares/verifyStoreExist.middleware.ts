import { Request, Response, NextFunction } from "express";
import { appError } from "../errors/handleErrors";
import { Repository } from "typeorm";
import { Store } from "../entities";
import appDataSource from "../data-source";

const verifyStoreExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!Number.isInteger(parseInt(req.params.storeId))) {
    throw new appError("The id passed is not an integer!");
  }

  const storeRepo: Repository<Store> = appDataSource.getRepository(Store);

  const isProductExists = await storeRepo.findOneBy({
    id: parseInt(req.params.storeId),
  });

  if (!isProductExists) {
    throw new appError("Store does not exists!", 404);
  }

  return next();
};

export default verifyStoreExistMiddleware;
