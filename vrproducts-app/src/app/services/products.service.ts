import { Injectable } from '@angular/core';
import {
  ICreateProductInterface,
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
      personalizedUrl += `price=${filters.price.replace(',', '.')}&`;
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

  async getProductById(id: string) {
    try {
      return (await this.api.get(`/product/${id}`)).data;
    } catch (err) {
      console.error(err);
    }
  }

  async createProduct(body: ICreateProductInterface) {
    try {
      return (await this.api.post('/product', body)).data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteProduct(id: string) {
    try {
      return (await this.api.delete(`/product/${id}`)).data;
    } catch (err) {
      console.error(err);
    }
  }

  async getProductsStoresOfAProduct(id: string) {
    try {
      return (await this.api.get(`/productstore/${id}`)).data;
    } catch (err) {
      console.error(err);
    }
  }
}
