import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockShape } from '../shape/productShape';
import { apiURL } from '../configs/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<StockShape[]> {

    const headers = this.getHeaderToken();

    return this.http.get<StockShape[]>(apiURL + "/product", { headers } );

  }

  private getHeaderToken() {
    
    const token: string = localStorage.getItem("token")!;
  
    const headers = new HttpHeaders({
      token: token
    });

    return headers;
  
  }
}