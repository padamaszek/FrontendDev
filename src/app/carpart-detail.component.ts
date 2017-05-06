import 'rxjs/add/operator/switchMap';
import { Carpart } from './carpart';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CarpartService } from './carpart.service';

@Component({
  selector: 'carpart-detail',
  template: `
    <div *ngIf="carpart">
      <h2>{{carpart.name}} details!</h2>
      <div><label>id: </label>{{carpart.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="carpart.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class CarpartDetailComponent implements OnInit {
  @Input() carpart: Carpart;

  constructor(
  private carpartService: CarpartService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.carpartService.getCarpart(+params['id']))
    .subscribe(carpart => this.carpart = carpart);
}
}