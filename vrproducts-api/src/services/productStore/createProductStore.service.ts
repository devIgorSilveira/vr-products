import { Repository } from "typeorm";
import {
  IProductStoreInterface,
  IProductStoreRequestInterface,
} from "../../interfaces";
import { Product, ProductStore, Store } from "../../entities";
import appDataSource from "../../data-source";

const createProductStoreService = async (
  body: IProductStoreRequestInterface,
  productId: number,
  storeId: number
): Promise<IProductStoreInterface> => {
  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  const product = await productRepo.findOneBy({ id: productId });

  const storeRepo: Repository<Store> = appDataSource.getRepository(Store);

  const store = await storeRepo.findOneBy({ id: storeId });

  const productStoreRepo: Repository<ProductStore> =
    appDataSource.getRepository(ProductStore);

  const productStore = await productStoreRepo.save({
    product: product!,
    store: store!,
    ...body,
  });

  return productStore;
};

export default createProductStoreService;
