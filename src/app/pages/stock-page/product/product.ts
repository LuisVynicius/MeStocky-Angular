import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  id: number = 0;
  @Input()
  title: string = "";
  @Input()
  quantity: number = 0;
  @Input()
  min_quantity: number = 0;
  @Input()
  category: string = "";

  @Output()
  edit = new EventEmitter<number>();

  constructor() { }

  toEdit() {
    this.edit.emit(this.id);
  }

  get warning(): boolean {
    return this.quantity < this.min_quantity;
  }
}
