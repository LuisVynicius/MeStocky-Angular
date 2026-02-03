import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { ReasonService } from '../../../services/reason-service';

@Component({
  selector: 'app-delete-reason',
  imports: [
    Button
  ],
  templateUrl: './delete-reason.html',
  styleUrl: './delete-reason.css',
})
export class DeleteReason {
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

  deleteReason() {

    this.reasonService.deleteReason(this.reason_id).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        alert("O Motivo não pode ter nenhum relatório relacionado");
      }
    });

  }
}
