import { Component } from '@angular/core';
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

}
