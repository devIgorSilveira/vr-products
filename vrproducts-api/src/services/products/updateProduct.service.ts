import { Repository } from "typeorm";
import { IProductInterface, IProductUpdateInterface } from "../../interfaces";
import { Product } from "../../entities";
import appDataSource from "../../data-source";

const updateProductService = async (
  body: IProductUpdateInterface,
  productId: number
): Promise<IProductInterface> => {
  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  await productRepo.update(productId, {
    ...body,
  });

  const updatedProduct = await productRepo.findOneBy({ id: productId });

  return updatedProduct!;
};

export default updateProductService;
