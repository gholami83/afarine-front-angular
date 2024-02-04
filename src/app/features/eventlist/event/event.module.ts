import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';



@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
  ]
})
export class EventModule { }
