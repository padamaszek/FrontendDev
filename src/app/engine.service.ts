import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Engine } from './engine';
import { ENGINES } from './mock-engines';
@Injectable()

export class EngineService {
private enginesUrl = 'api/engines';  // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }

  getEngines(): Promise<Engine[]> {
    return this.http.get(this.enginesUrl)
               .toPromise()
               .then(response => response.json().data as Engine[])
               .catch(this.handleError);
  }

  getEngine(id: number): Promise<Engine> {
  const url = `${this.enginesUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Engine)
    .catch(this.handleError);
}

update(engine: Engine): Promise<Engine> {
  const url = `${this.enginesUrl}/${engine.id}`;
  return this.http
    .put(url, JSON.stringify(engine), {headers: this.headers})
    .toPromise()
    .then(() => engine)
    .catch(this.handleError);
}

create(name: string): Promise<Engine> {
  return this.http
    .post(this.enginesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Engine)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.enginesUrl}/${id}`;
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