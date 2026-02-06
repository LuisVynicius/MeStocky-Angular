import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UserService } from '../services/user-service';
import { ValidTokenShape } from '../shape/userShape';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const service = inject(UserService);

  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    router.navigate(['/login']);
    return of(false);
  }
  
  return service.validToken().pipe(
    map((response: ValidTokenShape | string) => {

      if (typeof response === 'string') {
        localStorage.clear();
        router.navigate(['/login']);
        return false;
      }

      if (response.valided) {
        return true;
      } else {
        localStorage.clear();
        router.navigate(['/login']);
        return false;
      }
    }),
    catchError(() => {
      alert("Desconectado");
      localStorage.clear();
      router.navigate(['/login']);
      return of(false);
    })
  );
};
