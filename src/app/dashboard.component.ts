import { Component, OnInit } from '@angular/core';
import { Carpart } from './carpart';
import { CarpartService } from './carpart.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  carparts: Carpart[] = [];
  constructor(private carpartService: CarpartService) { }
  ngOnInit(): void {
    this.carpartService.getCarparts()
      .then(carparts => this.carparts = carparts.slice(1, 5));
  }
}