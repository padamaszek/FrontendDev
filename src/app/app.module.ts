import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent }        from './app.component';
import { CarpartDetailComponent } from './carpart-detail.component';
import { CarpartsComponent }     from './carparts.component';
import { CarpartService }         from './carpart.service';
import { DashboardComponent }         from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
	},
    {
  path: 'dashboard',
  component: DashboardComponent
	},
	{
  path: 'detail/:id',
  component: CarpartDetailComponent
	},
  	{
    path: 'carparts',
    component: CarpartsComponent
  	}
])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CarpartDetailComponent,
    CarpartsComponent
  ],
  providers: [
    CarpartService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}