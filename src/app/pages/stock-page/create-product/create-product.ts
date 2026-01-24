import { Component, EventEmitter, Output } from '@angular/core';
import { FormInput } from '../../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-create-product',
  imports: [
    FormsModule,
    FormInput,
    Button
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {
  @Output()
  clicked = new EventEmitter<void>();
  
  insert_product(form:NgForm) {

  }

  onClick() {
    console.log("emitiu");
    this.clicked.emit();
  }
}
