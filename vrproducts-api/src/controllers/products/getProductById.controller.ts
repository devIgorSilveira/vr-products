import { Request, Response } from "express";
import { getProductByIdService } from "../../services";

const getProductByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const product = await getProductByIdService(parseInt(req.params.id));

  return res.status(200).json(product);
};

export default getProductByIdController;
