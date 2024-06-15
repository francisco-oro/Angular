import {CanMatchFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {map, tap} from "rxjs";

export const publicMatchGuard: CanMatchFn = (route, state) => {
  const router: Router = inject(Router);
  return inject(AuthService).checkAuthentication().
  pipe(
    tap(isAuthenticated => {
      console.log('isAuthenticated', isAuthenticated);
    }),
    tap(isAuthenticated => {
      if (isAuthenticated) {
        router.navigate(['/']);
      }
    }),
    map(isAuthenticated => !isAuthenticated),
  );
};
