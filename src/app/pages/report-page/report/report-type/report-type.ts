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
  type: 0 | 1 = 0;

  get message(): string {
    return this.type === 0 ? 'Saída' : 'Entrada';
  }

  get cssClass(): string {
    return this.type === 0 ? 'report-exit' : 'report-entry';
  }
}
