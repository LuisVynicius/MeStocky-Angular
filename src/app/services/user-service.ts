import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginShape } from '../shape/userShape';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../configs/environment';
import { AuthenticationShape } from '../shape/generics';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor (
    private http: HttpClient
  ) { }

  login(loginShape: LoginShape): Observable<AuthenticationShape> {
  
    return this.http.post<AuthenticationShape>(apiURL + "/login", loginShape);

  }

}
