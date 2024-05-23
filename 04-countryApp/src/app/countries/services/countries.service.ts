import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, delay, map, Observable, of, tap} from "rxjs";
import {Country} from "../interfaces/country";
import {CacheStore} from "../interfaces/cache-store.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(private httpClient: HttpClient) {
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() => of([])),
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length ? countries[0] : null),
        catchError(() => of(null)),
      );

  }
  searchCapital(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/capital/${term}`)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries })
      );
  }
  searchCountry(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/name/${term}`);
  }
  searchRegion(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/region/${term}`);
  }

}
