import { Request, Response } from "express";
import { getAllProductsService } from "../../services";
import { IQueryProductsInterface } from "../../interfaces";

const getAllProductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const query: IQueryProductsInterface = req.query;

  const allProducts = await getAllProductsService(query);

  return res.status(200).json(allProducts);
};

export default getAllProductsController;
