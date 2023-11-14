import { Request, Response } from "express";
import { deleteProductService } from "../../services";

const deleteProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteProductService(parseInt(req.params.id));

  return res.status(204).json({});
};

export default deleteProductController;
