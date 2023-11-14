import { Request, Response } from "express";
import { updateProductStoreService } from "../../services";

const updateProductStoreController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const productStore = await updateProductStoreService(
    req.body,
    parseInt(req.params.id)
  );

  return res.status(200).json(productStore);
};

export default updateProductStoreController;
