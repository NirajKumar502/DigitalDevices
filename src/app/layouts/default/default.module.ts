import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { LampComponent } from 'src/app/modules/lamp/lamp.component';
import { AcComponent } from 'src/app/modules/ac/ac.component';
import { DoorlockComponent } from 'src/app/modules/doorlock/doorlock.component';
import { TvComponent } from 'src/app/modules/tv/tv.component';
import { ThermostatComponent } from 'src/app/modules/thermostat/thermostat.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DefaultComponent,
    LampComponent,
    AcComponent,
    DoorlockComponent,
    TvComponent,
    ThermostatComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
