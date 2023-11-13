import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, MatIconModule],
  declarations: [AppComponent, HeaderComponent, TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
