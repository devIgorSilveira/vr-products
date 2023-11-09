import { Request, Response } from "express";
import { createProductService } from "../../services";

const createProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newProduct = await createProductService(req.body);

  return res.status(201).json(newProduct);
};

export default createProductController;
