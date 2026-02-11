import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReportType } from './report-type/report-type';
import { Button } from '../../shared/button/button';
import { ReportShape } from '../../../shape/reportShape';

@Component({
  selector: 'app-report',
  imports: [
    ReportType,
    Button
  ],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export class Report implements OnInit {
  
  @Input()
  report: ReportShape = {
    id: 0,
    reason: "",
    date: "",
    product: "",
    quantity: 0,
    change_type: false
  };

  user_role: number = 0;

  @Output()
  edit = new EventEmitter<number>()

  ngOnInit(): void {
    this.user_role = Number(localStorage.getItem("user_role"));
  }

  toEdit() {
    this.edit.emit(this.report.id);
  }

}
