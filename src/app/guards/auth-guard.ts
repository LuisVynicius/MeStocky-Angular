import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (localStorage.getItem("token") === null) {
    router.navigate(["/login"]);
    localStorage.clear();
    return of(false);
  } else {
    return of(true);
  }
};
