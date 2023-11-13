import { Component, OnInit } from '@angular/core';
import { ProductDetailPage } from '../../pages/product-detail/product-detail.component';
import { StoresService } from '../../services/stores.service';
import { IStoreInterface } from '../../interfaces/store';

@Component({
  selector: 'app-modal-product-store',
  templateUrl: './modal-product-store.component.html',
  styleUrls: ['./modal-product-store.component.css'],
})
export class ModalProductStoreComponent implements OnInit {
  stores: IStoreInterface[] = [];

  constructor(
    private detail: ProductDetailPage,
    private storesService: StoresService
  ) {}

  ngOnInit(): void {
    this.getStores();
  }

  async getStores() {
    await this.storesService.getStores().then((result) => {
      this.stores = result;
    });
  }

  handleModal() {
    this.detail.handleModal();
  }
}
