import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReasonService } from '../../../services/reason-service';
import { FormsModule, NgForm } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { SelectInput } from '../../shared/select-input/select-input';
import { OptionsShape } from '../../../shape/generics';
import { ReportUpdateShape } from '../../../shape/reportShape';
import { ReportService } from '../../../services/report-service';

@Component({
  selector: 'app-edit-report',
  imports: [
    Button,
    SelectInput,
    FormsModule
  ],
  templateUrl: './edit-report.html',
  styleUrl: './edit-report.css',
})
export class EditReport implements OnInit {
  @Input()
  report_id: number = 0;

  options: OptionsShape[] = [];

  @Output()
  clicked = new EventEmitter<void>();

  constructor(
    private reasonService: ReasonService,
    private reportService: ReportService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.reasonService.getAllReasonsAsOptions().subscribe({
          next: (success) => {
            this.options = success as OptionsShape[];
            this.cdr.markForCheck();
          },
          error: (error) => {
            alert(error.error);
          }
        });
  }

  onClick() {
    this.clicked.emit();
  }

  editReason(form: NgForm) {
    const report: ReportUpdateShape = {
      id: this.report_id,
      reason_id: Number(form.value.reason_id) | 0
    }

    this.reportService.updateReport(report).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

}
