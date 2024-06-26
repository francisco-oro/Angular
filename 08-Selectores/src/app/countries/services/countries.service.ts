import {Injectable} from '@angular/core';
import {Country, Region, SmallCountry} from "../interfaces/Region";
import {Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl: string = "https://restcountries.com/v3.1";
  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Oceania, Region.Europe];
  constructor(private http: HttpClient) { }

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const url: string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`
    return this.http.get<SmallCountry[]>(url)
      .pipe(
        tap(response => console.log(response))
      );
  }
}
