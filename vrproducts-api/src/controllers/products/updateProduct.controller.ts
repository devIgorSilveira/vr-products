import { Request, Response } from "express";
import { updateProductService } from "../../services";

const updateProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const product = await updateProductService(req.body, parseInt(req.params.id));

  return res.status(200).json(product);
};

export default updateProductController;
