import { IProductStoreInterface } from '../productStore';

export interface IProductInterface {
  id: number;
  description: string;
  price?: number;
  image?: string;
  productsStore: IProductStoreInterface[];
}

export interface ICreateProductInterface {
  description: string;
  price?: number;
}

export interface IUpdateProductInterface {
  description?: string;
  price?: string;
}

export interface IProductFilterInterface {
  description?: string | null;
  id?: string | null;
  price?: string | null;
  salePrice?: string | null;
}
