import { Request, Response } from "express";
import { createStoreService } from "../../services";

const createStoreController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newStore = await createStoreService(req.body);

  return res.status(201).json(newStore);
};

export default createStoreController;
