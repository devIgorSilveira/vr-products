import { Request, Response } from "express";
import { getProductStoreOfOneProductService } from "../../services";

const getProductStoreOfOneProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const ProductsStores = await getProductStoreOfOneProductService(
    parseInt(req.params.id)
  );

  return res.status(200).json(ProductsStores);
};

export default getProductStoreOfOneProductController;
