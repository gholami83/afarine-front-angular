import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventlistComponent } from './eventlist.component';
import { EventlistRoutingModule } from './eventlist-routing.module';
import { WorkshopComponent } from './workshop/workshop.component';
import { StartappComponent } from './startapp/startapp.component';
import { MeetingComponent } from './meeting/meeting.component';
import { CafeComponent } from './cafe/cafe.component';
import { ConferenceComponent } from './conference/conference.component';
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EventlistComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    EventlistRoutingModule
  ]
})
export class EventlistModule { }
