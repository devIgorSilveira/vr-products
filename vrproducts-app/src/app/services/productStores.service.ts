import { Injectable } from '@angular/core';

import axios from 'axios';
import { ICreteProductStoreInterface } from '../interfaces/productStore';

@Injectable({
  providedIn: 'root',
})
export class ProductStoresService {
  constructor() {}

  private api = axios.create({
    baseURL: 'http://localhost:3001',
  });

  async createProductStore(
    productId: string,
    storeId: string,
    body: ICreteProductStoreInterface
  ) {
    try {
      return (
        await this.api.post(`/productstore/${productId}/${storeId}`, body)
      ).data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteProductStore(id: string) {
    try {
      (await this.api.delete(`/productstore/${id}`)).data;
    } catch (error) {
      console.error(error);
    }
  }
}
