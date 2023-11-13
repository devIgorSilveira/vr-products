import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ICreateProductInterface,
  IProductInterface,
  IUpdateProductInterface,
} from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { IProductStoreInterface } from '../../interfaces/productStore';
import { ProductStoresService } from '../../services/productStores.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
@Injectable({
  providedIn: 'root',
})
export class ProductDetailPage implements OnInit {
  id: string | null = null;

  product: IProductInterface | null = null;

  salePrices: IProductStoreInterface[] | null = null;

  isModalOpen = false;

  productForm = this.formBuilder.group({
    id: '',
    description: '',
    price: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private atvRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
    private productStoreService: ProductStoresService
  ) {}

  ngOnInit(): void {
    this.id = this.atvRoute.snapshot.paramMap.get('id');

    this.productForm.controls.id.disable();
    if (this.id != '0') {
      this.getProduct();
      this.getSalesPrices();
    }
  }

  async getProduct() {
    await this.productService
      .getProductById(this.id!)
      .then((result: IProductInterface) => {
        this.product = result;

        this.productForm.setValue({
          id: result.id.toString(),
          description: result.description,
          price: result.price ? result.price.toString() : '',
        });
      });
  }

  async getSalesPrices() {
    await this.productService
      .getProductsStoresOfAProduct(this.id!)
      .then((result) => {
        this.salePrices = result;
      });
  }

  async createProduct() {
    const body: ICreateProductInterface = {} as ICreateProductInterface;

    body.description = this.productForm.value.description!;

    if (this.productForm.value.price) {
      body.price = parseInt(this.productForm.value.price);
    }

    await this.productService.createProduct(body).then((result) => {
      this.router.navigate(['/']);
    });
  }

  async patchProduct() {
    const body: IUpdateProductInterface = {} as IUpdateProductInterface;

    body.description = this.productForm.value.description!;

    body.price = this.productForm.value.price!;

    await this.productService.patchProduct(body, this.id!.toString());

    this.getProduct();
  }

  async deleteProduct() {
    if (this.id) {
      await this.productService.deleteProduct(this.id.toString());
    }

    this.router.navigate(['/']);
  }

  async deleteProductStore(id: string) {
    await this.productStoreService.deleteProductStore(id);

    this.getSalesPrices();
  }

  handleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
