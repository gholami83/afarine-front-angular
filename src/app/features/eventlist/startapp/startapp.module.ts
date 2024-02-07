import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartappRoutingModule } from './startapp-routing.module';
import { ShareModule } from 'src/app/shared/components/share/share.module';
import { StartappComponent } from './startapp.component';



@NgModule({
  declarations: [StartappComponent],
  imports: [
    CommonModule,
    StartappRoutingModule,
    ShareModule
  ]
})
export class StartappModule { }
