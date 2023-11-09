import { Repository } from "typeorm";
import { IProductInterface, IProductRequestInterface } from "../../interfaces";
import appDataSource from "../../data-source";
import { Product } from "../../entities";

const createProductService = async (
  body: IProductRequestInterface
): Promise<IProductInterface> => {
  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  const product = await productRepo.save({
    ...body,
  });

  return product;
};

export default createProductService;
