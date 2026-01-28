import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCreateShape, StockShape } from '../shape/productShape';
import { apiURL } from '../configs/environment';
import { getHeaderToken } from './get_headers';
import { StockInformationShape } from '../shape/InformationShape';

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
  
  createProduct(product: ProductCreateShape): Observable<void> {

    const headers = getHeaderToken();

    return this.http.post<void>(apiURL + "/product", product, { headers} );

  }

  getInformations(): Observable<StockInformationShape> {

    const headers = getHeaderToken();

    return this.http.get<StockInformationShape>(apiURL + "/product/informations", { headers });

  }

}