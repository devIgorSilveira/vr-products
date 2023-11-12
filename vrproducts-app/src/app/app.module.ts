import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, MatIconModule],
  declarations: [AppComponent, HeaderComponent, FilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
