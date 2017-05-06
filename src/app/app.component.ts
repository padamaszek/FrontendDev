import { Component } from '@angular/core';

export class Carpart {
  id: number;
  name: string;
}
const CARPARTS: Carpart[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My Carparts</h2>
<ul class="carparts">
  <li *ngFor="let carpart of carparts">
   <span class="badge">{{carpart.id}}</span> {{carpart.name}}
    </li>
</ul>
  <h2>{{carpart.name}} details!</h2>
  <div><label>id: </label>{{carpart.id}}</div>
  <div>
      <label>name: </label>
      <input [(ngModel)]="carpart.name" placeholder="name">
    </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .carparts {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .carparts li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .carparts li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .carparts li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .carparts .text {
    position: relative;
    top: -3px;
  }
  .carparts .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})
export class AppComponent  { 
	title = 'Car Configurator';
	carparts = CARPARTS;
 	carpart: CarPart = {
  	id: 1,
  	name: 'Engine'
}; 
}

