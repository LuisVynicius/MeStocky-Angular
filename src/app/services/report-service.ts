import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductChangeShape, ReportShape } from '../shape/productShape';
import { Observable } from 'rxjs';
import { getHeaderToken } from './get_headers';
import { apiURL } from '../configs/environment';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllReports(): Observable<ReportShape[]> {

    const headers = getHeaderToken();

    return this.http.get<ReportShape[]>(apiURL + "/report", { headers } );

  }

  changeProductQuantity(change: ProductChangeShape): Observable<string> {

    const headers = getHeaderToken();

    return this.http.put(apiURL + "/product/quantity", change, { headers, responseType: "text" });

  }

}
