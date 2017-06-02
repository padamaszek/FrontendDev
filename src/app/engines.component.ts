import { Component, OnInit } from '@angular/core';
import { Engine } from './engine';
import { EngineService } from './engine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-engines',
   templateUrl: './engines.component.html',
  styleUrls: [ './engines.component.css' ],
  providers: [EngineService]
})
export class EnginesComponent implements OnInit {
  title = 'Tour of Engines';
  engines: Engine[];
  selectedEngine: Engine;

  constructor(
    private router: Router,
    private carpartService: EngineService) { }

  getEngines(): void {
    this.carpartService.getEngines().then(engines => this.engines = engines);
  }

  ngOnInit(): void {
    this.getEngines();
  }

  onSelect(engine: Engine): void {
    this.selectedEngine = engine;
  }

  gotoDetail(): void {
  this.router.navigate(['/engines/detail', this.selectedEngine.id]);
}

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.carpartService.create(name)
    .then(engine => {
      this.engines.push(engine);
      this.selectedEngine = null;
    });
}

delete(engine: Engine): void {
  this.carpartService
      .delete(engine.id)
      .then(() => {
        this.engines = this.engines.filter(e => e !== engine);
        if (this.selectedEngine === engine) { this.selectedEngine = null; }
      });
}
}