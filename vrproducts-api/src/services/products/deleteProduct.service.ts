import { Repository } from "typeorm";
import { Product } from "../../entities";
import appDataSource from "../../data-source";

const deleteProductService = async (id: number): Promise<Object> => {
  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  await productRepo.delete({ id: id });

  return {};
};

export default deleteProductService;
