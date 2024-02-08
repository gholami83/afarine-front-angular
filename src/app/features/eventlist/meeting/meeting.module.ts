import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingComponent } from './meeting.component';
import { ShareModule } from 'src/app/shared/components/share/share.module';



@NgModule({
  declarations: [MeetingComponent],
  imports: [
    CommonModule,
    ShareModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule { }
