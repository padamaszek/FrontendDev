import { Component, OnInit } from '@angular/core';
import { Carpart } from './carpart';
import { CarpartService } from './carpart.service';
@Component({
  selector: 'my-carparts',
  template: `
    <h1>{{title}}</h1>
    <h2>My Carparts</h2>
    <ul class="carparts">
      <li *ngFor="let carpart of carparts"
        [class.selected]="carpart === selectedCarpart"
        (click)="onSelect(carpart)">
        <span class="badge">{{carpart.id}}</span> {{carpart.name}}
      </li>
    </ul>
    <carpart-detail [carpart]="selectedCarpart"></carpart-detail>
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
  `],
  providers: [CarpartService]
})
export class CarpartsComponent implements OnInit {
  title = 'Tour of Carparts';
  carparts: Carpart[];
  selectedCarpart: Carpart;
  constructor(private carpartService: CarpartService) { }
  getCarparts(): void {
    this.carpartService.getCarparts().then(carparts => this.carparts = carparts);
  }
  ngOnInit(): void {
    this.getCarparts();
  }
  onSelect(carpart: Carpart): void {
    this.selectedCarpart = carpart;
  }
}