import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsShape } from '../shape/generics';
import { getHeaderToken } from './get_headers';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../configs/environment';
import { CategoryCreateShape, CategoryShape } from '../shape/CategoryShape';
import { CreateCategory } from '../pages/admin-page/create-category/create-category';

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

  getAllCategoriesAdmin(): Observable<CategoryShape[]> {

    const headers = getHeaderToken();

    return this.http.get<CategoryShape[]>(apiURL + "/category/admin", { headers });

  }

  createCategory(category: CategoryCreateShape): Observable<void> {

    const headers = getHeaderToken();

    return this.http.post<void>(apiURL + "/category", category, { headers });

  }

}
