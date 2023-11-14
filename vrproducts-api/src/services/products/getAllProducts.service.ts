import { Repository } from "typeorm";
import { IProductInterface, IQueryProductsInterface } from "../../interfaces";
import { Product } from "../../entities";
import appDataSource from "../../data-source";

const getAllProductsService = async ({
  code,
  desc,
  price,
  salePrice,
}: IQueryProductsInterface): Promise<IProductInterface[]> => {
  const productRepo: Repository<Product> = appDataSource.getRepository(Product);

  let allProducts = await productRepo.find({
    relations: {
      productsStore: true,
    },
  });

  if (code) {
    allProducts = allProducts.filter((product) => product.id == parseInt(code));
  }

  if (desc) {
    allProducts = allProducts.filter((product) =>
      product.description.toLowerCase().includes(desc.toLowerCase())
    );
  }

  if (price) {
    allProducts = allProducts.filter(
      (product) => product.price?.toString() == price
    );
  }

  if (salePrice) {
    allProducts = allProducts.filter((product) => {
      return product.productsStore.forEach((sale) => {
        return sale?.salePrice.toString() == salePrice;
      });
    });
  }

  return allProducts;
};

export default getAllProductsService;
