import { IProductStoreInterface } from '../productStore';

export interface IProductInterface {
  id: number;
  description: string;
  price?: number;
  image?: string;
  productStore: IProductStoreInterface[];
}

export interface IProductFilterInterface {
  description?: string | null;
  id?: string | null;
  price?: string | null;
  salePrice?: string | null;
}
