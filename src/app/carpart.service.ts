import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Carpart } from './carpart';
import { CARPARTS } from './mock-carparts';
@Injectable()

export class CarpartService {
private carpartsUrl = 'api/carparts';  // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }

  getCarparts(): Promise<Carpart[]> {
    return this.http.get(this.carpartsUrl)
               .toPromise()
               .then(response => response.json().data as Carpart[])
               .catch(this.handleError);
  }

  getCarpart(id: number): Promise<Carpart> {
  const url = `${this.carpartsUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Carpart)
    .catch(this.handleError);
}

update(carpart: Carpart): Promise<Carpart> {
  const url = `${this.carpartsUrl}/${carpart.id}`;
  return this.http
    .put(url, JSON.stringify(carpart), {headers: this.headers})
    .toPromise()
    .then(() => carpart)
    .catch(this.handleError);
}

create(name: string): Promise<Carpart> {
  return this.http
    .post(this.carpartsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Carpart)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.carpartsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}