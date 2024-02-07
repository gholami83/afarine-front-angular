import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingComponent } from './meeting.component';



@NgModule({
  declarations: [MeetingComponent],
  imports: [
    CommonModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule { }
