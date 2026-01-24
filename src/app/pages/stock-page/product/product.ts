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
  @Input()
  quantity: number = 0;
  @Input()
  min_quantity: number = 0;
  @Input()
  category: string = "";

  constructor(private router: Router) {

  }

  toEdit() {
    this.router.navigate(["/product/".concat(this.title)])
  }

  get warning(): boolean {
    return this.quantity < this.min_quantity;
  }
}
