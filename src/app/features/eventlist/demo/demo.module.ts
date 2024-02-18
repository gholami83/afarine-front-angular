import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoeRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { ShareModule } from 'src/app/shared/components/share/share.module';



@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoeRoutingModule,
    ShareModule,
  ]
})
export class DemoModule { }
