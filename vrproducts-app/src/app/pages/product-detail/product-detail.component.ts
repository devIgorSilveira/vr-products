import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ICreateProductInterface,
  IProductInterface,
} from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

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

  productForm = this.formBuilder.group({
    id: '',
    description: '',
    price: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private atvRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.atvRoute.snapshot.paramMap.get('id');

    if (this.id != '0') {
      this.getProduct();
      this.productForm.controls.id.disable();
    } else {
      this.productForm.controls.id.disable();
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

  async createProduct() {
    const body: ICreateProductInterface = {} as ICreateProductInterface;

    body.description = this.productForm.value.description!;

    if (this.productForm.value.price) {
      body.price = parseInt(this.productForm.value.price);
    }
    console.log(body);
    await this.productService.createProduct(body).then((result) => {
      this.router.navigate(['/']);
    });
  }

  async deleteProduct() {
    if (this.id) {
      await this.productService.deleteProduct(this.id.toString());
    }

    this.router.navigate(['/']);
  }
}
