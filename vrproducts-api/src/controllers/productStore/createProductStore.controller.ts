import { Request, Response } from "express";
import { createProductStoreService } from "../../services";

const createProductStoreController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { productId, storeId } = req.params;

  const newProductStore = await createProductStoreService(
    req.body,
    parseInt(productId),
    parseInt(storeId)
  );

  return res.status(201).json(newProductStore);
};

export default createProductStoreController;
