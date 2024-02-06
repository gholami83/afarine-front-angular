import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeRoutingModule } from './cafe-routing.module';
import { CardUserComponent } from 'src/app/shared/components/card-user/card-user.component';
import { CafeComponent } from './cafe.component';
import { ShareModule } from 'src/app/shared/components/share/share.module';
@NgModule({
  declarations: [CafeComponent],
  imports: [
    CommonModule, 
    CafeRoutingModule, 
    ShareModule,
  ],
})
export class CafeModule implements OnInit{
  ngOnInit() {
    
}
}
