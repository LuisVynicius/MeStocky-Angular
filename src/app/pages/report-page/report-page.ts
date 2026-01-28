import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Report } from './report/report';
import { ReportShape } from '../../shape/productShape';
import { ReportService } from '../../services/report-service';

@Component({
  selector: 'app-report-page',
  imports: [
    Report
  ],
  templateUrl: './report-page.html',
  styleUrl: './report-page.css',
})
export class ReportPage implements OnInit {
  
  reports: ReportShape[] = [];
  
  constructor(
    private reportService: ReportService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    
    this.reportService.getAllReports().subscribe({
      next: (success) => {
        this.reports = success;
        this.cdr.markForCheck();
      }
    });

  }

}
