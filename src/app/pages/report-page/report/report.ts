import { Component, Input } from '@angular/core';
import { ReportType } from './report-type/report-type';
import { ReportShape } from '../../../shape/productShape';

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
  report: ReportShape = {
    reason: "",
    date: "",
    product: "",
    quantity: 0,
    change_type: false
  };

}
