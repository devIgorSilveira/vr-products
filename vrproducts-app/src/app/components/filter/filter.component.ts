import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  filterForm = this.formBuilder.group({
    id: '',
    description: '',
    price: '',
    salePrice: '',
  });

  constructor(private formBuilder: FormBuilder) {}
}
