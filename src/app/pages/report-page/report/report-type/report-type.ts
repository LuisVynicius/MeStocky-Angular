import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-type',
  imports: [
    CommonModule
  ],
  templateUrl: './report-type.html',
  styleUrl: './report-type.css',
})
export class ReportType {
  @Input()
  reason_type: boolean = false;
  @Input()
  reason: string = "";

  get cssClass(): string {
    return this.reason_type ? "report-entry" : "report-exit";
  }
}
