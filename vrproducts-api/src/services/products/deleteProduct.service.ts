import { Repository } from "typeorm";
import { Product, ProductStore } from "../../entities";
import appDataSource from "../../data-source";

const deleteProductService = async (id: number): Promise<Object> => {
  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  const product = await productRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      productsStore: true,
    },
  });

  if (product!.productsStore.length > 0) {
    const productStoreRepo: Repository<ProductStore> =
      appDataSource.getRepository(ProductStore);

    product?.productsStore.forEach(async (registry) => {
      await productStoreRepo.delete({ id: registry.id });
    });
  }

  await productRepo.delete({ id: id });

  return {};
};

export default deleteProductService;
