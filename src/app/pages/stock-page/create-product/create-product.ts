import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormInput } from '../../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { SelectInput } from '../../shared/select-input/select-input';
import { optionsShape } from '../../../shape/generics';

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
  options: optionsShape[] = [];

  @Output()
  clicked = new EventEmitter<void>();
  
  insert_product(form:NgForm) {
    console.log(form.value);
  }

  onClick() {
    console.log("emitiu");
    this.clicked.emit();
  }
}
