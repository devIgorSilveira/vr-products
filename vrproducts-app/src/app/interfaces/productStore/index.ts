import { IStoreInterface } from '../store';

export interface IProductStoreInterface {
  id: number;
  salePrice: number;
  store: IStoreInterface;
}

export interface ICreteProductStoreInterface {
  salePrice: number;
}
