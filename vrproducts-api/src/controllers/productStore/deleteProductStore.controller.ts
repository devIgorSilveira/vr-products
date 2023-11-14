import { Request, Response } from "express";
import { deleteProductStoreService } from "../../services";

const deleteProductStoreController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteProductStoreService(parseInt(req.params.id));

  return res.status(204).json({});
};

export default deleteProductStoreController;
