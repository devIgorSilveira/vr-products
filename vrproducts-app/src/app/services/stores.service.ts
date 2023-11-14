import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  constructor() {}

  private api = axios.create({
    baseURL: 'http://localhost:3001',
  });

  async getStores() {
    try {
      return (await this.api.get('/store')).data;
    } catch (err) {
      console.error(err);
    }
  }
}
