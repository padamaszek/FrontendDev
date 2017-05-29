import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { CarpartsComponent }      from './carparts.component';
import { CarpartDetailComponent }  from './carpart-detail.component';
import { CarpartService }          from './carpart.service';

import { EnginesComponent }      from './engines.component';
import { EngineDetailComponent }  from './engine-detail.component';
import { EngineService }          from './engine.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CarpartDetailComponent,
    CarpartsComponent,
    EngineDetailComponent,
    EnginesComponent,
  ],
  providers: [ CarpartService, EngineService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }