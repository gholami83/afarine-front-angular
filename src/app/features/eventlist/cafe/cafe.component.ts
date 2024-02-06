import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit{
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

ngOnInit() { 
}
}
