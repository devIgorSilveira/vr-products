import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { MainPage } from './pages/main/main.component';
import { ProductDetailPage } from './pages/product-detail/product-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: MainPage },
      { path: 'product/:id', component: ProductDetailPage },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ProductDetailPage,
    MainPage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
