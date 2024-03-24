import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeSerice } from 'src/app/services/change.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss'],
  providers:[EventService]
})
export class CafeComponent implements OnInit {
  eventId!: number;
  event: any;
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

  constructor(private route: ActivatedRoute,private router:Router,private eventService:EventService,public changeSerice:ChangeSerice) {}
  ngOnInit() {
    const eventId = this.route.snapshot.params['id']
    const eventTitle = this.router.url.split('/')[2]
    // this.event = this.eventService.events.find(event => event.id === +this.route.snapshot.params['id'])
    // console.log(this.event)
    // if (!this.event){
      //   this.eventfound = false;
      //   this.router.navigate(['/events']);
      // }
      this.eventService.getEvent(eventTitle.toLowerCase(),eventId).subscribe(
        (event)=>{
          this.event=event;
          console.log(event)
        },
        (err)=>{}
      )
      // this.eventService.getEvent(eventTitle.toLowerCase(),eventId).subscribe(console.log)
  }
}
