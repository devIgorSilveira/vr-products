import { IStoreInterface } from '../store';

export interface IProductStoreInterface {
  id: number;
  salePrice: number;
  store: IStoreInterface;
}
