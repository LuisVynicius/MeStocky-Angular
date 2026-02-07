import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { FormInput } from '../../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { ReasonService } from '../../../services/reason-service';
import { ReasonUpdateShape } from '../../../shape/reasonShape';

@Component({
  selector: 'app-edit-reason',
  imports: [
    Button,
    FormInput,
    FormsModule],
  templateUrl: './edit-reason.html',
  styleUrl: './edit-reason.css',
})
export class EditReason {
  @Input()
  reason_id: number = 0;

  @Output()
  clicked = new EventEmitter<void>();

  constructor(
    private reasonService: ReasonService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  editReason(form: NgForm) {

    const reason: ReasonUpdateShape = {
      id: this.reason_id,
      name: form.value.name
    };

    this.reasonService.updateReason(reason).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }
}
