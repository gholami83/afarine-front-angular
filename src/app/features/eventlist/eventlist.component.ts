import { Component, NgModule } from '@angular/core';
import { EventRoutingModule } from './event-routing.module';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss'],
})

export class EventlistComponent {
  events = [
    {
      'image':'assets/imgs/wp11572314.jpg',
      'name':'کارگری',
      'date':'سه شنبه ساعت 5 عصر',
      'price':'5,000,000',
      'location':'پاساژ زیتون',
      'executer':'شرکت آفرینه',
    },
    {
      'image':'assets/imgs/wp12154950.jpg',
      'name':'رویداد کارآفرینی و کارگری',
      'date':'سه شنبه ساعت 5 عصر',
      'price':'5,000,000',
      'location':'پاساژ زیتون',
      'executer':'شرکت آفرینه',
    },
    {
      'image':'assets/imgs/wp4700266.jpg',
      'name':'رویداد کارآفرینی و کارگری',
      'date':'سه شنبه ساعت 5 عصر',
      'price':'5,000,000',
      'location':'پاساژ زیتون',
      'executer':'شرکت آفرینه',
    },
    {
      'image':'assets/imgs/wp11572314.jpg',
      'name':'رویداد کارآفرینی و کارگری',
      'date':'سه شنبه ساعت 5 عصر',
      'price':'5,000,000',
      'location':'پاساژ زیتون',
      'executer':'شرکت آفرینه',
    },
    {
      'image':'assets/imgs/wp12154950.jpg',
      'name':'رویداد کارآفرینی و کارگری',
      'date':'سه شنبه ساعت 5 عصر',
      'price':'5,000,000',
      'location':'پاساژ زیتون',
      'executer':'شرکت آفرینه',
    },
    {
      'image':'assets/imgs/wp4700266.jpg',
      'name':'رویداد کارآفرینی و کارگری',
      'date':'سه شنبه ساعت 5 عصر',
      'price':'5,000,000',
      'location':'پاساژ زیتون',
      'executer':'شرکت آفرینه',
    },
    {
      'image':'assets/imgs/wp11572314.jpg',
      'name':'رویداد کارآفرینی و کارگری',
      'date':'سه شنبه ساعت 5 عصر',
      'price':'5,000,000',
      'location':'پاساژ زیتون',
      'executer':'شرکت آفرینه',
    },
    {
      'image':'assets/imgs/wp12154950.jpg',
      'name':'رویداد کارآفرینی و کارگری',
      'date':'سه شنبه ساعت 5 عصر',
      'price':'5,000,000',
      'location':'پاساژ زیتون',
      'executer':'شرکت آفرینه',
    },
  ]
}
