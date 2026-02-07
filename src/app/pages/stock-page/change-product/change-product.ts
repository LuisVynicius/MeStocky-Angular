import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormInput } from '../../shared/form-input/form-input';
import { Button } from '../../shared/button/button';
import { SelectInput } from '../../shared/select-input/select-input';
import { OptionsShape } from '../../../shape/generics';
import { ProductChangeShape } from '../../../shape/productShape';
import { ReportService } from '../../../services/report-service';

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
  @Input()
  options: OptionsShape[] = [];

  @Output()
  clicked = new EventEmitter<void>();

  constructor(
    private reportService: ReportService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  changeProduct(form: NgForm) {
    const change: ProductChangeShape = {
      id: this.product_id,
      change_type: Boolean(form.value.change_type),
      quantity: form.value.quantity,
      reason_id: Number(form.value.reason_id)
    }

    this.reportService.changeProductQuantity(change).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        alert(error.error)
      }
    });
  }

}
