import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCreateShape, ProductShape, ProductUpdateShape, StockShape } from '../shape/productShape';
import { apiURL } from '../configs/environment';
import { getHeaderToken } from './get_headers';
import { StockInformationShape } from '../shape/informationShape';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<StockShape[] | string> {

    const headers = getHeaderToken();

    return this.http.get<StockShape[] | string>(apiURL + "/product", { headers } );

  }

  getProductById(id: number): Observable<ProductShape | string> {

    const headers = getHeaderToken();

    return this.http.get<ProductShape | string>(apiURL + "/product/" + id, { headers });

  }

  getInformations(): Observable<StockInformationShape | string> {

    const headers = getHeaderToken();

    return this.http.get<StockInformationShape | string>(apiURL + "/product/informations", { headers });

  }
  
  createProduct(product: ProductCreateShape): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.post<void | string>(apiURL + "/product", product, { headers} );

  }

  updateProduct(product: ProductUpdateShape): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.put<void | string>(apiURL + "/product", product, { headers })

  }

  deleteProduct(id: number): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.delete<void | string>(apiURL + "/product/" + id, { headers });

  }

}