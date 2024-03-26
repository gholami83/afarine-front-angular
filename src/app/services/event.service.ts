import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class EventService{
  events = [
    {
      id:0,
      image: 'assets/imgs/wp11572314.jpg',
      name: 'کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'cafe',
    },
    {
      id:1,
      image: 'assets/imgs/wp12154950.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'conference',
    },
    {
      id:2,
      image: 'assets/imgs/wp4700266.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'workshop',
    },
    {
      id:3,
      image: 'assets/imgs/wp11572314.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'meeting',
    },
    {
      id:4,
      image: 'assets/imgs/wp12154950.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'startup',
    },
    {
      id:5,
      image: 'assets/imgs/wp4700266.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'demo',
    },
    {
      id:6,
      image: 'assets/imgs/wp11572314.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'meeting',
    },
    {
      id:7,
      image: 'assets/imgs/wp12154950.jpg',
      name: 'رویداد کارآفرینی و کارگری',
      date: 'سه شنبه ساعت 5 عصر',
      price: '5,000,000',
      location: 'پاساژ زیتون',
      executer: 'شرکت آفرینه',
      type: 'startup',
    },
  ];
  BASE_URL = 'https://afarine.noarino.ir/api/events/'
  constructor(private http:HttpClient)  { }
  getEvent(name:string,id:string ){
    return this.http.get(`${this.BASE_URL}${name}/list/${id}`)
  }
}
