import { Component, Inject, NgModule, OnInit, inject } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import GlobalService from 'src/app/services/global.service';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent{
  events = [
    {
      image: 'assets/imgs/wp11572314.jpg',
      name: 'کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'cafe',
    },
    {
      image: 'assets/imgs/wp12154950.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'conference',
    },
    {
      image: 'assets/imgs/wp4700266.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'workshop',
    },
    {
      image: 'assets/imgs/wp11572314.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'meeting',
    },
    {
      image: 'assets/imgs/wp12154950.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'startup',
    },
    {
      image: 'assets/imgs/wp4700266.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'demo',
    },
    {
      image: 'assets/imgs/wp11572314.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'meeting',
    },
    {
      image: 'assets/imgs/wp12154950.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'startup',
    },
  ];
  constructor(private generalService:GeneralService,@Inject('api_url') url:string){}
  public log(){
    this.generalService.log(this.generalService.username)
  }
  public onChange(event: Event){
    this.generalService.username = (event.target as HTMLInputElement).value
  }
}
