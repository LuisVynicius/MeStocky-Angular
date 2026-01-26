import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockShape } from '../shape/productShape';
import { apiURL } from '../configs/environment';
import { getHeaderToken } from './get_headers';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<StockShape[]> {

    const headers = getHeaderToken();

    return this.http.get<StockShape[]>(apiURL + "/product", { headers } );

  }
  
}