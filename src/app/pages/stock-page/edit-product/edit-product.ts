import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormInput } from '../../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { SelectInput } from '../../shared/select-input/select-input';
import { OptionsShape } from '../../../shape/generics';

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

  @Output()
  clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }

  editProduct(form: NgForm) {

  }

}
