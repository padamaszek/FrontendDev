import { Component, OnInit } from '@angular/core';
import { Carpart } from './carpart';
import { CarpartService } from './carpart.service';

import { Engine } from './engine';
import { EngineService } from './engine.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  carparts: Carpart[] = [];
  engines: Engines[] = [];

  constructor(private carpartService: CarpartService,private engineService: EngineService) { }

  ngOnInit(): void {
    this.carpartService.getCarparts()
      .then(carparts => this.carparts = carparts.slice(1, 5));

	this.engineService.getEngines()
      .then(engines => this.engines = engines.slice(1, 5));
  }
}