import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProductInterface } from '../../interfaces/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  products: IProductInterface[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.productService.getProducts();
    console.log(this.products);
  }
}
