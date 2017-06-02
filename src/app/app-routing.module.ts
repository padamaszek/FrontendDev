import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { CarpartsComponent }      from './carparts.component';
import { CarpartDetailComponent }  from './carpart-detail.component';

import { EnginesComponent }      from './engines.component';
import { EngineDetailComponent }  from './engine-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: CarpartDetailComponent },
  { path: 'carparts',     component: CarpartsComponent },
  { path: 'engines',     component: EnginesComponent },
  { path: 'engines/detail/:id', component: EngineDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}