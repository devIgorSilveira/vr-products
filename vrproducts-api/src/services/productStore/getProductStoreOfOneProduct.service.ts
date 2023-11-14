import { Repository } from "typeorm";
import { Product, ProductStore } from "../../entities";
import appDataSource from "../../data-source";
import { IProductStoreInterface } from "../../interfaces";

const getProductStoreOfOneProductService = async (
  id: number
): Promise<IProductStoreInterface[]> => {
  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  const product = await productRepo.findOneBy({ id: id });

  const productStoreRepo: Repository<ProductStore> =
    appDataSource.getRepository(ProductStore);

  const productsStores = await productStoreRepo.find({
    where: {
      product: product!,
    },
    relations: {
      store: true,
    },
  });

  return productsStores;
};
export default getProductStoreOfOneProductService;
