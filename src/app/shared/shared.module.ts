import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    SidepanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[
    SidepanelComponent
  ]
})
export class SharedModule { }
