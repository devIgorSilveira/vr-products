import { Request, Response } from "express";
import { getAllStoresService } from "../../services";

const getAllStoresController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const stores = await getAllStoresService();

  return res.status(200).json(stores);
};

export default getAllStoresController;
