import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Report } from './report/report';
import { ReportShape } from '../../shape/productShape';
import { ReportService } from '../../services/report-service';
import { MenuBar } from '../shared/menu-bar/menu-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-page',
  imports: [
    Report,
    MenuBar,
    FormsModule
  ],
  templateUrl: './report-page.html',
  styleUrl: './report-page.css',
})
export class ReportPage implements OnInit {
  
  reports: ReportShape[] = [];
  filter: string = "";

  constructor(
    private reportService: ReportService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    
    this.reportService.getAllReports().subscribe({
      next: (success) => {
        this.reports = success as ReportShape[];
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert("Erro interno");
      }
    });
  }

  get filteredProducts(): ReportShape[] {
    if (this.filter === "all") {
      return this.reports;
    }

    return this.reports.filter(
      report => report.change_type === Boolean(this.filter)
    )
  }

}
