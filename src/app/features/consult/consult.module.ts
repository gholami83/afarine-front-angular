import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultRoutingModule } from './consult-routing.module';
import { ShareModule } from 'src/app/shared/components/share/share.module';
import { ConsultComponent } from './consult.component';



@NgModule({
  declarations: [ConsultComponent],
  imports: [
    CommonModule,
    ConsultRoutingModule,
    ShareModule
  ]
})
export class ConsultModule { }
