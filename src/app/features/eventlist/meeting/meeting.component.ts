import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, mergeMap } from 'rxjs';
import { ChangeService } from 'src/app/services/change.service';
import { EventService } from 'src/app/services/event.service';

interface Event {
  'user-role': any;
  'meeting': '';
  'innovation_cafe': {
     'institute':any
  };
 }
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent {
  // public users = [
  //   {
  //     name: 'حسین غلامی',
  //     educate: 'کارشناسی کامپیوتر',
  //     executive: 'مدیر ارشد هلدینگ آفرینه',
  //     position: 'مجری دوره',
  //   },
  //   {
  //     name: 'سید عباس موسوی',
  //     educate: 'کارشناسی کامپیوتر',
  //     executive: 'مدیر ار��د هلدینگ آفرینه',
  //     position: 'مجر�������� دوره',
  //   },
  //   {
  //     name: 'ابوالفضل زراعتکار',
  //     educate: 'کارشناسی کامپیوتر',
  //     executive: 'مدیر ارشد هلدینگ آفرینه',
  //     position: 'مجری دوره',
  //   },
  //   {
  //     name: 'محمد‌امین طهماسبی‌نیا',
  //     educate: 'کارشناسی کامپیوتر',
  //     executive: 'مدیر ارشد هلدینگ آفرینه',
  //     position: 'مجری دوره',
  //   },
  //   {
  //     name: 'مجتبی اکبری',
  //     educate: 'کارشناسی کامپیوتر',
  //     executive: 'مدیر ارشد هلدینگ آفرینه',
  //     position: 'مجری دوره',
  //   },
  //   {
  //     name: 'مسعود آقایی',
  //     educate: 'کارشناسی کامپیوتر',
  //     executive: 'مدیر ارشد هلدینگ آفرینه',
  //     position: 'مجری دوره',
  //   },
  // ]
  institutes:any
  supporters:any
  event: any;
  users:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    public changeSerice: ChangeService
  ) {}
  ngOnInit(): void {
    const eventId = this.route.snapshot.params['id'];
    const eventTitle = this.router.url.split('/')[2];
    this.eventService.getEvent(eventTitle.toLowerCase(), eventId).pipe(
      map((event: any) => event),
      mergeMap((eventData: any) => {
        const instituteRequest = this.eventService.getEvent('institute', JSON.stringify(eventData.meeting.institute));
        const supporterRequests = eventData.meeting.supporter.map((supporterId: any) => this.eventService.getEvent('institute', JSON.stringify(supporterId)));

        return forkJoin([instituteRequest, ...supporterRequests]).pipe(
          map(([instituteData, ...supporterData]) => {
            this.institutes = instituteData;
            this.supporters = supporterData; // Assuming you want to store the supporter data in this.supporter
            return {
              instituteData: instituteData,
              supporterData: supporterData,
              eventData: eventData,
            };
          })
        );
      }),
    ).subscribe(
      (data: any) => {
        this.event = data.eventData;
        this.institutes = [data.instituteData];
        this.users = this.event['user-role'];
        this.supporters = data.supporterData;
      }
      // (err)=>{}
    )
  }
}
