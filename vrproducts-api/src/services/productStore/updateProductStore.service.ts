import { Repository } from "typeorm";
import {
  IProductStoreInterface,
  IProductStoreUpdateInterface,
} from "../../interfaces";
import { ProductStore } from "../../entities";
import appDataSource from "../../data-source";

const updateProductStoreService = async (
  body: IProductStoreUpdateInterface,
  id: number
): Promise<IProductStoreInterface> => {
  const productStoreRepo: Repository<ProductStore> =
    appDataSource.getRepository(ProductStore);

  await productStoreRepo.update(id, {
    ...body,
  });

  const productStore = await productStoreRepo.findOneBy({ id: id });

  return productStore!;
};

export default updateProductStoreService;
