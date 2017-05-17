import { Component, OnInit } from '@angular/core';
import { Carpart } from './carpart';
import { CarpartService } from './carpart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-carparts',
   templateUrl: './carparts.component.html',
  styleUrls: [ './carparts.component.css' ]
  providers: [CarpartService]
})
export class CarpartsComponent implements OnInit {
  title = 'Tour of Carparts';
  carparts: Carpart[];
  selectedCarpart: Carpart;

  constructor(
    private router: Router,
    private carpartService: CarpartService) { }

  getCarparts(): void {
    this.carpartService.getCarparts().then(carparts => this.carparts = carparts);
  }
  ngOnInit(): void {
    this.getCarparts();
  }
  onSelect(carpart: Carpart): void {
    this.selectedCarpart = carpart;
  }
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedCarpart.id]);
}
}