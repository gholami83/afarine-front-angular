import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventlistComponent } from './eventlist.component';
import { EventlistRoutingModule } from './eventlist-routing.module';



@NgModule({
  declarations: [
    EventlistComponent
  ],
  imports: [
    CommonModule,
    EventlistRoutingModule
  ]
})
export class EventlistModule { }
