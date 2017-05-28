import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Carpart }           from './carpart';
@Injectable()
export class CarpartSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Carpart[]> {
    return this.http
               .get(`app/carparts/?name=${term}`)
               .map(response => response.json().data as Carpart[]);
  }
}