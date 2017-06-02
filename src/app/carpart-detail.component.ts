import 'rxjs/add/operator/switchMap';
import { Carpart } from './carpart';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CarpartService } from './carpart.service';

@Component({
  selector: 'carpart-detail',
  templateUrl: './carpart-detail.component.html',
  styleUrls: [ './carpart-detail.component.css' ]
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

goBack(): void {
  this.location.back();
}

save(): void {
  this.carpartService.update(this.carpart)
    .then(() => this.goBack());
}
}