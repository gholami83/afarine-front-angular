import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent{
  @Input() user:any;
  @Input() textstyle:string='';
  @Input() rolestyle:string='';
  @Input() bgstyle:string='';
}
