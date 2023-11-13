import { IProductStoreInterface } from "../productStore";

export interface IProductRequestInterface {
  description: string;
  price?: number;
  image?: string;
}

export interface IProductInterface extends IProductRequestInterface {
  id: number;
  productsStore: IProductStoreInterface[];
}

export interface IProductUpdateInterface {
  description?: string;
  price?: number;
  image?: string;
}

export interface IQueryProductsInterface {
  code?: string;
  desc?: string;
  price?: string;
  salePrice?: string;
}
