import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormInput } from '../../shared/form-input/form-input';
import { Button } from '../../shared/button/button';
import { SelectInput } from '../../shared/select-input/select-input';

@Component({
  selector: 'app-change-product',
  imports: [
    FormsModule,
    FormInput,
    Button,
    SelectInput
  ],
  templateUrl: './change-product.html',
  styleUrl: './change-product.css',
})
export class ChangeProduct {

  @Input()
  product_id: number = 0;
  
  @Output()
  clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }

  changeProduct(form: NgForm) {
    
  }

}
