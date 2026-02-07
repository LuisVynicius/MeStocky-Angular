import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormInput } from '../../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { SelectInput } from '../../shared/select-input/select-input';
import { OptionsShape } from '../../../shape/generics';
import { ProductService } from '../../../services/product-service';
import { ProductUpdateShape } from '../../../shape/productShape';

@Component({
  selector: 'app-edit-product',
  imports: [
    FormsModule,
    FormInput,
    Button,
    SelectInput
  ],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {

  @Input()
  options: OptionsShape[] = [];
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

  editProduct(form: NgForm) {

    const product: ProductUpdateShape = {
      id: this.product_id,
      name: form.value.name,
      category_id: Number(form.value.category_id) || 0,
      min_quantity: Number(form.value.min_quantity) || 0
    }

    this.productService.updateProduct(product).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        alert(error.error)
      }
    })
    
  }

}
