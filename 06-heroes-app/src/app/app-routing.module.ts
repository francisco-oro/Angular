import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404PageComponent} from "./shared/pages/error404-page/error404-page.component";
import {authActivateGuard} from "./auth/guards/auth-activate.guard";
import {authMatchGuard} from "./auth/guards/auth-match.guard";

// domain.com
const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate: [authActivateGuard],
    canMatch: [authMatchGuard]
  },
  {path: '404', component: Error404PageComponent },
  {path: '', redirectTo: 'heroes', pathMatch: 'full' },
  {path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
