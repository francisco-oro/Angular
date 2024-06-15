import {ActivatedRouteSnapshot, CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {tap} from "rxjs";

export const authMatchGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  return inject(AuthService).checkAuthentication()
    .pipe(
      tap(isAuthenticated => { console.log(isAuthenticated); }),
      tap( isAuthenticated => {
        return !isAuthenticated ? router.navigate(['/auth/login']) : true;
      }),
    );
};

