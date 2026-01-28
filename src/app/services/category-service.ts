import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsShape } from '../shape/generics';
import { getHeaderToken } from './get_headers';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../configs/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllCategories(): Observable<OptionsShape[]> {

    const headers = getHeaderToken();

    return this.http.get<OptionsShape[]>(apiURL + "/category", { headers });

  }

}
