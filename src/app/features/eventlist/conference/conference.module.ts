import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceRoutingModule } from './conference-routing.module';
import { ShareModule } from 'src/app/shared/components/share/share.module';
import { ConferenceComponent } from './conference.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [ConferenceComponent],
  imports: [
    CommonModule,
    ConferenceRoutingModule,
    ShareModule,
    SwiperModule
  ]
})
export class ConferenceModule { }
