import { Component, Inject, NgModule, OnInit, inject } from '@angular/core';
import { Router,Route } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';
import GlobalService from 'src/app/services/global.service';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {
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
  eventfound = true;
  constructor(private generalService:GeneralService, @Inject('api_url') url:string,private router: Router){}
  public log(){
    this.generalService.log(this.generalService.username)
  }
  public onChange(event: Event){
    this.generalService.username = (event.target as HTMLInputElement).value
    this.router.navigate(['evev'] ,{queryParams: { eventfound:"true"},fragment:'title'})
  }

  ngOnInit(): void { 
  const interval$:Observable<any> = new Observable((observer:Observer<number>)=>{
    let count =0
    setInterval(()=>{
      observer.next(count++);
      if (count==5){
        observer.complete()
      }
    }
   ,1000)
  })
  interval$.subscribe({
    next: (val) => {
      console.log(val)
      console.log('what')
    },
    // ()=>{},
    complete:()=>{console.log('Inter')},
  })
  interval$.subscribe(
  )
}
}
