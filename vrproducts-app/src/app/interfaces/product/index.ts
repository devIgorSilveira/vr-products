import { IProductStoreInterface } from '../productStore';

export interface IProductInterface {
  id: number;
  description: string;
  price?: number;
  image?: string;
  productStore: IProductStoreInterface[];
}
