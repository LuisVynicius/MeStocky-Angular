import { Component, Input } from '@angular/core';
import { ReportType } from './report-type/report-type';

@Component({
  selector: 'app-report',
  imports: [
    ReportType
  ],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export class Report {
  @Input()
  date: string = "";

  @Input()
  product: string = "";

  @Input()
  quantity: number = 0;

  get report_color(): 0 | 1 {
    return this.quantity > 0 ? 1 : 0;
  }
}
