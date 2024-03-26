import { Component, Input, OnInit } from '@angular/core';
import { businessFields } from '../../models/bussiness_fields';

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
  
  public getTranslateField(name: string) {
    return businessFields.find((item: any) => {
      return item.name === name;
    })?.translateName;
  }
}
