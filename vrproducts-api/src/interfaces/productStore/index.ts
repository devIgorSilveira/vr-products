import { IProductInterface } from "../product";
import { IStoreInterface } from "../store";

export interface IProductStoreRequestInterface {
  salePrice: number;
}

export interface IProductStoreInterface extends IProductStoreRequestInterface {
  id: number;
  product: IProductInterface;
  store: IStoreInterface;
}

export interface IProductStoreUpdateInterface {
  salePrice?: number;
}
