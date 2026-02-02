import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsShape } from '../shape/generics';
import { getHeaderToken } from './get_headers';
import { apiURL } from '../configs/environment';
import { ReasonShape } from '../shape/reasonShape';

@Injectable({
  providedIn: 'root',
})
export class ReasonService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllReasonsAsOptions(): Observable<OptionsShape[]> {

    const headers = getHeaderToken();

    return this.http.get<OptionsShape[]>(apiURL + "/reason", { headers } );

  }

  getAllReasons(): Observable<ReasonShape[]> {

    const headers = getHeaderToken();

    return this.http.get<ReasonShape[]>(apiURL + "/reason", { headers } );

  }

}
