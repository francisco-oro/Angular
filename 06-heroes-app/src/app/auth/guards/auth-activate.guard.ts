import { CanActivateFn } from '@angular/router';

export const authActivateGuard: CanActivateFn = (route, state) => {
  console.log('Can activate');
  console.log({route, state});
  return true;
};
