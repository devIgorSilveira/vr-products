import { Component, OnInit } from '@angular/core';
import { ProductDetailPage } from '../../pages/product-detail/product-detail.component';
import { StoresService } from '../../services/stores.service';
import { IStoreInterface } from '../../interfaces/store';
import { FormBuilder } from '@angular/forms';
import { ProductStoresService } from '../../services/productStores.service';
import { IProductStoreInterface } from '../../interfaces/productStore';

@Component({
  selector: 'app-modal-product-store',
  templateUrl: './modal-product-store.component.html',
  styleUrls: ['./modal-product-store.component.css'],
})
export class ModalProductStoreComponent implements OnInit {
  stores: IStoreInterface[] = [];

  productId = this.detail.id;

  editProductStore: IProductStoreInterface | null | undefined = null;

  formProductStore = this.formBuilder.group({
    storeId: '',
    salePrice: '',
  });

  constructor(
    private detail: ProductDetailPage,
    private storesService: StoresService,
    private formBuilder: FormBuilder,
    private productStoreService: ProductStoresService
  ) {}

  ngOnInit(): void {
    this.getStores();

    if (this.detail.productStoreId) {
      this.editProductStore = this.detail.salePrices!.find(
        (sale) => sale.id == this.detail.productStoreId
      );

      this.formProductStore.controls.salePrice.patchValue(
        this.editProductStore!.salePrice.toString()
      );
      this.formProductStore.controls.storeId.patchValue(
        this.editProductStore!.store.id.toString()
      );
      this.formProductStore.controls.storeId.disable();
    }
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
          this.detail.getProduct();
          this.detail.getSalesPrices();
          this.detail.handleModal();
        });
    }
  }

  async patchProductStore() {
    const { salePrice } = this.formProductStore.value;

    if (salePrice == '') {
      window.alert(
        'Um ou mais campos obrigatórios não foram preenchidos corretamente'
      );
    } else {
      await this.productStoreService
        .updateProductStore(this.editProductStore!.id.toString(), {
          salePrice: parseInt(salePrice!),
        })
        .then((result) => {
          this.detail.getProduct();
          this.detail.getSalesPrices();
          this.detail.handleModal();
        });
    }
  }

  handleModal() {
    this.detail.handleModal();
  }
}
