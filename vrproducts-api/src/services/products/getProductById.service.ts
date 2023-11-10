import { Repository } from "typeorm";
import { IProductInterface } from "../../interfaces";
import { Product } from "../../entities";
import appDataSource from "../../data-source";

const getProductByIdService = async (
  id: number
): Promise<IProductInterface> => {
  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  const product = await productRepo.findOneBy({ id: id });

  return product!;
};

export default getProductByIdService;
