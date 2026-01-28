import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormInput } from '../../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { SelectInput } from '../../shared/select-input/select-input';
import { OptionsShape } from '../../../shape/generics';
import { ProductService } from '../../../services/product-service';
import { ProductCreateShape } from '../../../shape/productShape';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  imports: [
    FormsModule,
    FormInput,
    Button,
    SelectInput
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {
  @Input()
  options: OptionsShape[] = [];

  @Output()
  clicked = new EventEmitter<void>();
  
  constructor(
    private productService: ProductService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  insertProduct(form:NgForm) {
    let product: ProductCreateShape = form.value;

    product.category_id = Number(product.category_id);

    this.productService.createProduct(product).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        console.log("TODO ERROR");
      }
    });
  }

}
