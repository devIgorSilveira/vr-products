import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'vrproducts-app';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url == '/') {
      this.router.navigate(['/main']);
    }
  }
}
