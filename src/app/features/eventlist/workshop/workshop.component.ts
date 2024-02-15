import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent {
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
  ]
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
}
