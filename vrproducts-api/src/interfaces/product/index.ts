export interface IProductRequestInterface {
  description: string;
  price?: number;
  image?: string;
}

export interface IProductInterface extends IProductRequestInterface {
  id: number;
  productsStore: IProductStoreInterface[];
}

interface IProductStoreInterface {
  id: number;
  salePrice: number;
}

export interface IQueryProductsInterface {
  code?: string;
  desc?: string;
  price?: string;
  salePrice?: string;
}
