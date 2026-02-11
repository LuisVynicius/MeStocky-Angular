import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductChangeShape } from '../shape/productShape';
import { Observable } from 'rxjs';
import { getHeaderToken } from './get_headers';
import { apiURL } from '../configs/environment';
import { ReportShape, ReportUpdateShape } from '../shape/reportShape';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllReports(): Observable<ReportShape[] | string> {

    const headers = getHeaderToken();

    return this.http.get<ReportShape[] | string>(apiURL + "/report", { headers } );

  }

  changeProductQuantity(change: ProductChangeShape): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.put<void | string>(apiURL + "/product/quantity", change, { headers });

  }

  updateReport(report: ReportUpdateShape): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.put<void | string>(apiURL + "/report", report, { headers });

  }

}
