import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailPage } from '../../pages/product-detail/product-detail.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private detail: ProductDetailPage) {}

  isMain = this.router.url == '/';
  isDetail = this.router.url.includes('product');

  createProduct() {
    this.detail.createProduct();
  }

  deleteProduct() {
    this.detail.deleteProduct();
  }
}
