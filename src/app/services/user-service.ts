import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginShape, TokenShape, UserAdminShape, UserCreateShape, UserCredentialsShape, ValidTokenShape } from '../shape/userShape';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../configs/environment';
import { AuthenticationShape } from '../shape/generics';
import { getHeaderToken } from './get_headers';

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

  getAllUsersForAdmin(): Observable<UserAdminShape[]> {

    const headers = getHeaderToken();

    return this.http.get<UserAdminShape[]>(apiURL + "/user", { headers });

  }

  createUser(user: UserCreateShape): Observable<void> {

    const headers = getHeaderToken();

    return this.http.post<void>(apiURL + "/user", user, { headers });
      
  }

  updateUserInformations(user: UserCredentialsShape): Observable<void> {

    const headers = getHeaderToken();

    return this.http.put<void>(apiURL + "/user/informations", user, { headers });

  }

}
