import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginShape, UserAdminShape, UserCreateShape, UserCredentialsShape, UserInformationsShape, ValidTokenShape } from '../shape/userShape';
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

  validToken(): Observable<ValidTokenShape> {
  
    const headers = getHeaderToken();

    return this.http.get<ValidTokenShape>(apiURL + "/login/valid", { headers });

  }

  getAllUsersForAdmin(): Observable<UserAdminShape[]> {

    const headers = getHeaderToken();

    return this.http.get<UserAdminShape[]>(apiURL + "/user", { headers });

  }

  createUser(user: UserCreateShape): Observable<void> {

    const headers = getHeaderToken();

    return this.http.post<void>(apiURL + "/user", user, { headers });
      
  }

  updateUserInformations(user: UserInformationsShape): Observable<void> {

    const headers = getHeaderToken();

    return this.http.put<void>(apiURL + "/user/informations", user, { headers });

  }

  updateUserCredentials(user: UserCredentialsShape): Observable<void> {

    const headers = getHeaderToken();

    return this.http.put<void>(apiURL + "/user/credentials", user, { headers });

  }

  deleteUser(id: number): Observable<void> {
    
    const headers = getHeaderToken();

    return this.http.delete<void>(apiURL + "/user/" + id, { headers })

  }

}
