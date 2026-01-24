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
    date: "2026-01-05",
    product: "Teclado Mecânico",
    quantity: 10,
    type: true,
    reason: "Reposição de estoque"
  },
  {
    date: "2026-01-06",
    product: "Mouse Gamer",
    quantity: 5,
    type: false,
    reason: "Venda"
  },
  {
    date: "2026-01-07",
    product: "Monitor 24\"",
    quantity: 3,
    type: true,
    reason: "Compra de fornecedor"
  },
  {
    date: "2026-01-08",
    product: "Cabo HDMI",
    quantity: 12,
    type: false,
    reason: "Saída para manutenção"
  },
  {
    date: "2026-01-09",
    product: "Notebook",
    quantity: 2,
    type: false,
    reason: "Venda"
  },
  {
    date: "2026-01-10",
    product: "Notebook",
    quantity: 4,
    type: true,
    reason: "Devolução de cliente"
  },
  {
    date: "2026-01-11",
    product: "Headset",
    quantity: 6,
    type: true,
    reason: "Entrada por ajuste de inventário"
  },
  {
    date: "2026-01-12",
    product: "Headset",
    quantity: 2,
    type: false,
    reason: "Produto com defeito"
  },
  {
    date: "2026-01-13",
    product: "Mouse Gamer",
    quantity: 8,
    type: true,
    reason: "Reposição de estoque"
  },
  {
    date: "2026-01-14",
    product: "Teclado Mecânico",
    quantity: 4,
    type: false,
    reason: "Venda"
  }
  ];
  
}
