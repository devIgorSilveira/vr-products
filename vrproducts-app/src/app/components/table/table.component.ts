import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProductInterface } from '../../interfaces/product';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  products: IProductInterface[] = [];

  filterForm = this.formBuilder.group({
    id: '',
    description: '',
    price: '',
    salePrice: '',
  });

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.productService.getProducts();
  }

  async onSubmit() {
    this.products = [
      ...(await this.productService.filterProducts(this.filterForm.value)),
    ];
  }
}
