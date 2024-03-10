import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss'],
  providers:[EventService]
})
export class CafeComponent implements OnInit {
  eventId!: number;
  event!: any;
  eventfound: boolean = true;
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

  constructor(private route: ActivatedRoute,private router:Router,private eventService:EventService) {}

  ngOnInit() {
    this.event = this.eventService.events.find(event => event.id === +this.route.snapshot.params['id'])
    console.log(this.event)
    if (!this.event){
      this.eventfound = false;
      this.router.navigate(['/events']);
    }
  }
}
