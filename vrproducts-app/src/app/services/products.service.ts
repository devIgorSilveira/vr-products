import { Injectable } from '@angular/core';
import { IProductInterface } from '../interfaces/product';

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
}
