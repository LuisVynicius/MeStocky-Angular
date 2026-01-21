import { Component, Input } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Warning } from './warning/warning';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [
    Button,
    Warning
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  
  @Input()
  title: string = "";

  constructor(private router: Router) {

  }

  toEdit() {
    this.router.navigate(["/product/".concat(this.title)])
  }
}
