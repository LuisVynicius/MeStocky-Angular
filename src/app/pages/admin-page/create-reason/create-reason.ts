import { Component, EventEmitter, Output } from '@angular/core';
import { FormInput } from '../../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { ReasonService } from '../../../services/reason-service';
import { ReasonCreateShape } from '../../../shape/reasonShape';

@Component({
  selector: 'app-create-reason',
  imports: [
    FormInput,
    Button,
    FormsModule
  ],
  templateUrl: './create-reason.html',
  styleUrl: './create-reason.css',
})
export class CreateReason {

  @Output()
  clicked = new EventEmitter<void>();
  
  constructor(
    private reasonService: ReasonService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  insertReason(form: NgForm) {

      const reason: ReasonCreateShape = {
        name: form.value.name
      };

      this.reasonService.createReason(reason).subscribe({
            next: (success) => {
              window.location.reload();
            },
            error: (err) => {
              console.log("erro")
            }
        });

    }
}
