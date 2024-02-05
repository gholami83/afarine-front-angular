import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  public users = [
    {
      name: 'حسین غلامی',
      educate: 'کارشناسی کامپیوتر',
      executive: 'مدیر ارشد هلدینگ آفرینه',
      position: 'مجری دوره',
    },
    {
      name: 'سید عباس موسوی',
      educate: 'کارشناسی کامپیوتر',
      executive: 'مدیر ارشد هلدینگ آفرینه',
      position: 'مجری دوره',
    },
    {
      name: 'ابوالفضل زراعتکار',
      educate: 'کارشناسی کامپیوتر',
      executive: 'مدیر ارشد هلدینگ آفرینه',
      position: 'مجری دوره',
    },
    {
      name: 'محمد‌امین طهماسبی‌نیا',
      educate: 'کارشناسی کامپیوتر',
      executive: 'مدیر ارشد هلدینگ آفرینه',
      position: 'مجری دوره',
    },
    {
      name: 'مجتبی اکبری',
      educate: 'کارشناسی کامپیوتر',
      executive: 'مدیر ارشد هلدینگ آفرینه',
      position: 'مجری دوره',
    },
    {
      name: 'مسعود آقایی',
      educate: 'کارشناسی کامپیوتر',
      executive: 'مدیر ارشد هلدینگ آفرینه',
      position: 'مجری دوره',
    },
  ];

  public institutes = [
    {
      name: 'شرکت آفرینه',
    },
    {
      name: 'شرکت آفرینه',
    },
    {
      name: 'شرکت آفرینه',
    },
    {
      name: 'شرکت آفرینه',
    },
    {
      name: 'شرکت آفرینه',
    },
  ];

  ngOnInit(): void {}

  getEventType(event: string) {
    switch (event) {
      case 'a':
        return 'workshop-class';
      case 'b':
        return 'startapp-class';
      case 'c':
        return 'meeting-class';
      case 'd':
        return 'cafe-class';
      case 'e':
        return 'conference-class';
      case 'f':
        return 'demo-class';
      default:
        return 'background-test';
    }
  }
}
