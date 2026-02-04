import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { ProductService } from '../../../services/product-service';

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
  
  constructor(
    private productService: ProductService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  deleteProduct() {

    this.productService.deleteProduct(this.product_id).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        alert("Erro")
      }
    })

  }

}
