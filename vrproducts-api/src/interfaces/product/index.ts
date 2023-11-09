export interface IProductRequestInterface {
  description: string;
  price?: number;
  image?: string;
}

export interface IProductInterface extends IProductRequestInterface {
  id: number;
}
