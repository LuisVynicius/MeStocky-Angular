import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-delete-product',
  imports: [
    Button
  ],
  templateUrl: './delete-product.html',
  styleUrl: './delete-product.css',
})
export class DeleteProduct {

  @Input()
  product_id: number = 0;

  @Output()
  clicked = new EventEmitter<void>();
  
  onClick() {
    this.clicked.emit();
  }

  deleteProduct() {

  }

}
