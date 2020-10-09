import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { AcComponent } from './modules/ac/ac.component';
import { DoorlockComponent } from './modules/doorlock/doorlock.component';
import { LampComponent } from './modules/lamp/lamp.component';
import { ThermostatComponent } from './modules/thermostat/thermostat.component';
import { TvComponent } from './modules/tv/tv.component';


const routes: Routes = [
  { path: '', component: DefaultComponent,
    children:[
      { path: '', component: LampComponent},
      { path: 'ac', component: AcComponent},
      { path: 'doorlock', component: DoorlockComponent},
      { path: 'tv', component: TvComponent},
      { path: 'thermostat', component: ThermostatComponent},
      ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
