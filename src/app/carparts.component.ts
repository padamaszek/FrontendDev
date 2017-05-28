import { Component, OnInit } from '@angular/core';
import { Carpart } from './carpart';
import { CarpartService } from './carpart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-carparts',
   templateUrl: './carparts.component.html',
  styleUrls: [ './carparts.component.css' ],
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

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.carpartService.create(name)
    .then(carpart => {
      this.carparts.push(carpart);
      this.selectedCarpart = null;
    });
}

delete(carpart: Carpart): void {
  this.carpartService
      .delete(carpart.id)
      .then(() => {
        this.carparts = this.carparts.filter(c => c !== carpart);
        if (this.selectedCarpart === carpart) { this.selectedCarpart = null; }
      });
}
}