import { IProductStoreInterface } from "../productStore";

export interface IProductRequestInterface {
  description: string;
  price?: number;
  image?: string;
}

export interface IProductInterface extends IProductRequestInterface {
  id: number;
  productsStore: IProductStoreWithoutRelationInterface[];
}

export interface IProductUpdateInterface {
  description?: string;
  price?: number;
  image?: string;
}

type IProductStoreWithoutRelationInterface = Pick<
  IProductStoreInterface,
  "id" | "salePrice"
>;

export interface IQueryProductsInterface {
  code?: string;
  desc?: string;
  price?: string;
  salePrice?: string;
}
