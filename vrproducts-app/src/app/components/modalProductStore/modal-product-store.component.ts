import { Component, OnInit } from '@angular/core';
import { ProductDetailPage } from '../../pages/product-detail/product-detail.component';
import { StoresService } from '../../services/stores.service';
import { IStoreInterface } from '../../interfaces/store';
import { FormBuilder } from '@angular/forms';
import { ProductStoresService } from '../../services/productStores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-product-store',
  templateUrl: './modal-product-store.component.html',
  styleUrls: ['./modal-product-store.component.css'],
})
export class ModalProductStoreComponent implements OnInit {
  stores: IStoreInterface[] = [];

  productId = this.detail.id;

  formProductStore = this.formBuilder.group({
    storeId: '',
    salePrice: '',
  });

  constructor(
    private detail: ProductDetailPage,
    private storesService: StoresService,
    private formBuilder: FormBuilder,
    private productStoreService: ProductStoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStores();
  }

  async getStores() {
    await this.storesService.getStores().then((result) => {
      this.stores = result;
    });
  }

  async onSubmit() {
    const { salePrice, storeId } = this.formProductStore.value;

    if (salePrice == '' || storeId == '') {
      window.alert(
        'Um ou mais campos obrigatórios não foram preenchidos corretamente'
      );
    } else {
      await this.productStoreService
        .createProductStore(this.detail.id!, storeId!, {
          salePrice: parseInt(salePrice!),
        })
        .then((result) => {
          const route = `/product/${this.productId}`;
          this.detail.getProduct();
          this.detail.getSalesPrices();
          this.detail.handleModal();
          this.router.navigate([route]);
        });
    }
  }

  handleModal() {
    this.detail.handleModal();
  }
}
