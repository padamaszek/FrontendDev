import 'rxjs/add/operator/switchMap';
import { Engine } from './engine';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { EngineService } from './engine.service';

@Component({
  selector: 'engine-detail',
  templateUrl: './engine-detail.component.html',
  styleUrls: [ './engine-detail.component.css' ]
})
export class EngineDetailComponent implements OnInit {
  @Input() engine: Engine;

  constructor(
  private engineService: EngineService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.engineService.getEngine(+params['id']))
    .subscribe(engine => this.engine = engine);
}

goBack(): void {
  this.location.back();
}

save(): void {
  this.engineService.update(this.engine)
    .then(() => this.goBack());
}
}