import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsShape } from '../shape/generics';
import { getHeaderToken } from './get_headers';
import { apiURL } from '../configs/environment';
import { ReasonCreateShape, ReasonShape, ReasonUpdateShape } from '../shape/reasonShape';

@Injectable({
  providedIn: 'root',
})
export class ReasonService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllReasonsAsOptions(): Observable<OptionsShape[] | string> {

    const headers = getHeaderToken();

    return this.http.get<OptionsShape[] | string>(apiURL + "/reason", { headers } );

  }

  getAllReasons(): Observable<ReasonShape[] | string> {

    const headers = getHeaderToken();

    return this.http.get<ReasonShape[] | string>(apiURL + "/reason", { headers } );

  }

  createReason(reason: ReasonCreateShape): Observable<void | string> {
  
    const headers = getHeaderToken();

    return this.http.post<void | string>(apiURL + "/reason", reason, { headers} );

  }

  updateReason(reason: ReasonUpdateShape): Observable<void | string> {
  
    const headers = getHeaderToken();

    return this.http.put<void | string>(apiURL + "/reason", reason, { headers} );

  }

  deleteReason(id: number): Observable<void | string> {

    const headers = getHeaderToken();

    return this.http.delete<void | string>(apiURL + "/reason/" + id, { headers });

  }

}
