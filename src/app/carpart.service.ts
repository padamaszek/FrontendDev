import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Carpart } from './carpart';
import { CARPARTS } from './mock-carparts';
@Injectable()

export class CarpartService {
private carpartsUrl = 'api/carparts';  // URL to web api

constructor(private http: Http) { }

  getCarparts(): Promise<Carpart[]> {
    return this.http.get(this.carpartsUrl)
               .toPromise()
               .then(response => response.json().data as Carpart[])
               .catch(this.handleError);
  }

  getCarpart(id: number): Promise<Carpart> {
  return this.getCarparts()
             .then(carparts => carparts.find(carpart => carpart.id === id));
}

 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}