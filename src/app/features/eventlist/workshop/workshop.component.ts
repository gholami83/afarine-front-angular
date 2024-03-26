import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
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
  event: any;
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
      map((event: any) =>{
        return event
      }),
      mergeMap((eventData:any)=>{
        return this.eventService.getEvent('institute',JSON.stringify(eventData.work_shop.institute)).pipe(
          map((instituteData:any)=>{
            this.institutes=instituteData
            return {
              instituteData: instituteData,
              eventData: eventData,
            }
          })
        )
      }),
    ).subscribe(
      (eventData: any) => {
        this.event=eventData.eventData
        this.institutes=[eventData.instituteData]
        this.users=this.event['user-role']
      }
      // (err)=>{}
    )
  }
}
