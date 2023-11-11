import { Repository } from "typeorm";
import { ProductStore } from "../../entities";
import appDataSource from "../../data-source";

const deleteProductStoreService = async (id: number): Promise<Object> => {
  const productStoreRepo: Repository<ProductStore> =
    appDataSource.getRepository(ProductStore);

  await productStoreRepo.delete({ id: id });

  return {};
};

export default deleteProductStoreService;
