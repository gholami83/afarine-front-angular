import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshoproutingModule } from './workshop-routing.module';
import { WorkshopComponent } from './workshop.component';
import { ShareModule } from 'src/app/shared/components/share/share.module';



@NgModule({
  declarations: [WorkshopComponent],
  imports: [
    CommonModule,
    ShareModule,
    WorkshoproutingModule
  ]
})
export class WorkshopModule { }
