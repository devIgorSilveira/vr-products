import { Injectable } from '@angular/core';
import {
  IProductFilterInterface,
  IProductInterface,
} from '../interfaces/product';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  private api = axios.create({
    baseURL: 'http://localhost:3001',
  });

  async getProducts() {
    try {
      return (await this.api.get('/product')).data;
    } catch (err) {
      console.error(err);
    }
  }

  async filterProducts(filters: IProductFilterInterface) {
    let personalizedUrl = '/?';

    if (filters.description) {
      personalizedUrl += `desc=${filters.description}&`;
    }
    if (filters.id) {
      personalizedUrl += `code=${filters.id}&`;
    }
    if (filters.price) {
      console.log(filters.price);
      personalizedUrl += `price=${filters.price.replace(',', '.')}&`;
      console.log(personalizedUrl);
    }
    if (filters.salePrice) {
      personalizedUrl += `saleprice=${filters.salePrice}&`;
    }

    try {
      return (await this.api.get('/product' + personalizedUrl)).data;
    } catch (err) {
      console.error(err);
    }
  }
}
