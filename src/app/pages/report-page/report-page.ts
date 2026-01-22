import { Component } from '@angular/core';
import { Report } from './report/report';
import { ReportShape } from '../../shape/productShape';

@Component({
  selector: 'app-report-page',
  imports: [
    Report
  ],
  templateUrl: './report-page.html',
  styleUrl: './report-page.css',
})
export class ReportPage {
  reports: ReportShape[] = [
    { 
      date: "2026-01-01", product: "Notebook", quantity: 5 },
    { date: "2026-01-02", product: "Mouse", quantity: -18 },
    { date: "2026-01-03", product: "Teclado", quantity: 12 },
    { date: "2026-01-04", product: "Monitor", quantity: 7 },
    { date: "2026-01-05", product: "Headset", quantity: -9 },
    { date: "2026-01-06", product: "Webcam", quantity: 4 },
    { date: "2026-01-07", product: "Cadeira Gamer", quantity: 2 },
    { date: "2026-01-08", product: "HD Externo", quantity: -6 },
    { date: "2026-01-09", product: "SSD", quantity: 11 },
    { date: "2026-01-10", product: "Pen Drive", quantity: 25 }
  ];
  
}
