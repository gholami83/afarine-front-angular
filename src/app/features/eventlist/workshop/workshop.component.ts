import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ChangeService } from 'src/app/services/change.service';
import { EventService } from 'src/app/services/event.service';


interface Event {
  'user-role': any;
  'meeting':''
 }
@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent {
  users:any
  institutes:any
  supporters:any
  event: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    public changeSerice: ChangeService
  ) {}
  ngOnInit(): void {
    window.scroll(0,0);
    const eventId = this.route.snapshot.params['id'];
    const eventTitle = this.router.url.split('/')[2];
    this.eventService.getEvent(eventTitle.toLowerCase(), eventId).pipe(
      map((event: any) => event),
      mergeMap((eventData: any) => {
        const instituteRequest = this.eventService.getEvent('institute', JSON.stringify(eventData.work_shop.institute));
        const supporterRequests = eventData.work_shop.supporter.map((supporterId: any) => this.eventService.getEvent('institute', JSON.stringify(supporterId)));

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
