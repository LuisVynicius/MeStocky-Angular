import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Report } from './report/report';
import { ReportShape } from '../../shape/productShape';
import { ReportService } from '../../services/report-service';
import { MenuBar } from '../shared/menu-bar/menu-bar';

@Component({
  selector: 'app-report-page',
  imports: [
    Report,
    MenuBar
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
        this.reports = success as ReportShape[];
        this.cdr.markForCheck();
      }
    });

  }

}
