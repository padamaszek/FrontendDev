import { Component } from '@angular/core';

export class CarPart {
  id: number;
  name: string;
}
const CARPARTS: CarPart[] = [
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
  <h2>{{part.name}} details!</h2>
  <div><label>id: </label>{{part.id}}</div>
  <div>
      <label>name: </label>
      <input [(ngModel)]="part.name" placeholder="name">
    </div>
  `,
})
export class AppComponent  { 
	title = 'Car Configurator';
	carParts = CARPARTS
 	part: CarPart = {
  	id: 1,
  	name: 'Engine'
}; 
}

