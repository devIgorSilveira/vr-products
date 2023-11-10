import { Repository } from "typeorm";
import { IStoreInterface } from "../../interfaces";
import { Store } from "../../entities";
import appDataSource from "../../data-source";

const getAllStoresService = async (): Promise<IStoreInterface[]> => {
  const storeRepo: Repository<Store> = appDataSource.getRepository(Store);

  const stores = await storeRepo.find();

  return stores;
};

export default getAllStoresService;
