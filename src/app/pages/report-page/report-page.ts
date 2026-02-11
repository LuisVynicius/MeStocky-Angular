import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Report } from './report/report';
import { ReportService } from '../../services/report-service';
import { MenuBar } from '../shared/menu-bar/menu-bar';
import { FormsModule } from '@angular/forms';
import { EditReport } from './edit-report/edit-report';
import { ReportShape } from '../../shape/reportShape';

@Component({
  selector: 'app-report-page',
  imports: [
    Report,
    MenuBar,
    FormsModule,
    EditReport
  ],
  templateUrl: './report-page.html',
  styleUrl: './report-page.css',
})
export class ReportPage implements OnInit {
  
  reports: ReportShape[] = [];
  filter: string = "all";
  popup_value: number = 0;
  report_id: number = 0;

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

  popup(value: number) {
    if (this.popup_value === value) {
      this.popup_value = 0;
    } else {
      this.popup_value = value;
    }
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
