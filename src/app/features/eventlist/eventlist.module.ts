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
import { ShareModule } from 'src/app/shared/components/share/share.module';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';



@NgModule({
  declarations: [
    EventlistComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    EventlistRoutingModule,
    ShareModule,
  ]
})
export class EventlistModule { }
