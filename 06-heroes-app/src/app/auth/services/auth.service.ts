import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../../environments/environments";
import {User} from "../interfaces/user.interface";
import {catchError, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;
  constructor(private httpClient: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) {
      return undefined;
    }
    return structuredClone(this.user);
  }

  public login(email: string, password: string): Observable<User> {
    // http:post('login', {email, password});
    return this.httpClient.get<User>(`${this.baseUrl}/users/1`, {})
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem("token", 'jsdisdu91283u0j.sdias1by8hd91.sd79h1ffj1f9')),
      );
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem("token")) {
      return of(false);
    }

    const token = localStorage.getItem("token");

    return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(err => of(false)),
      );
  }

  public logout(){
    this.user = undefined;
    localStorage.clear();
  }
}
