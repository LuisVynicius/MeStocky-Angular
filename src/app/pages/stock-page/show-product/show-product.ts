import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { ProductShape } from '../../../shape/productShape';
import { Button } from '../../shared/button/button';
import { Item } from './item/item';

@Component({
  selector: 'app-show-product',
  imports: [
    Item
  ],
  templateUrl: './show-product.html',
  styleUrl: './show-product.css',
})
export class ShowProduct implements OnInit {
  @Input()
  product_id: number = 0;

  product: ProductShape = {
    name: "",
    description: "",
    category: "",
    quantity: 0,
    min_quantity: 0
  }

  @Output()
  clicked = new EventEmitter<void>();

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productService.getProductById(this.product_id).subscribe({
      next: (success) => {
        this.product = success as ProductShape;
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

  onClick() {
    this.clicked.emit();
  }
}
