import { Repository } from "typeorm";
import { IStoreInterface, IStoreRequestInterface } from "../../interfaces";
import { Store } from "../../entities";
import appDataSource from "../../data-source";

const createStoreService = async (
  body: IStoreRequestInterface
): Promise<IStoreInterface> => {
  const storeRepo: Repository<Store> = appDataSource.getRepository(Store);

  const store = await storeRepo.save({
    ...body,
  });

  return store;
};

export default createStoreService;
