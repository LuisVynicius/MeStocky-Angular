import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsShape } from '../shape/generics';
import { getHeaderToken } from './get_headers';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../configs/environment';
import { CategoryCreateShape, CategoryShape, CategoryUpdateShape } from '../shape/categoryShape';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllCategories(): Observable<OptionsShape[] | string> {

    const headers = getHeaderToken();

    return this.http.get<OptionsShape[] | string>(apiURL + "/category", { headers });

  }

  getAllCategoriesAdmin(): Observable<CategoryShape[] | string> {

    const headers = getHeaderToken();

    return this.http.get<CategoryShape[] | string>(apiURL + "/category/admin", { headers });

  }

  createCategory(category: CategoryCreateShape): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.post<void | string>(apiURL + "/category", category, { headers });

  }

  updateCategory(category: CategoryUpdateShape): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.put<void | string>(apiURL + "/category", category, { headers });

  }

  deleteCategory(id: number): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.delete<void | string>(apiURL + "/category/" + id, { headers });

  }

}
