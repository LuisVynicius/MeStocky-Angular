import { HttpHeaders } from "@angular/common/http";

export function getHeaderToken(): HttpHeaders {
  const token = localStorage.getItem("token");

  return new HttpHeaders({
    token: token ?? ""
  });
}