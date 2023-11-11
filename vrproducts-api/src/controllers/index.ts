import createProductStoreController from "./productStore/createProductStore.controller";
import createProductController from "./products/createProduct.controller";
import deleteProductController from "./products/deleteProduct.controller";
import getAllProductsController from "./products/getAllProducts.controller";
import getProductByIdController from "./products/getProductById.controller";
import updateProductController from "./products/updateProduct.controller";
import createStoreController from "./stores/createStore.controller";
import getAllStoresController from "./stores/getAllstores.controller";

export {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  deleteProductController,
  updateProductController,
  createStoreController,
  getAllStoresController,
  createProductStoreController,
};
