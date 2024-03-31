import { Injectable, OnInit } from '@angular/core';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { EventService } from './event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class instituteService implements OnInit {
  institutes!:Observable<any>
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
  }
  getInstitutes(){
    const eventId = this.route.snapshot.params['id'];
    const eventTitle = this.router.url.split('/')[2];
    return this.eventService.getEvent(eventTitle.toLowerCase(), eventId).pipe(
      map((event: any) => event),
      mergeMap((eventData: any) => {
        const instituteRequest = this.eventService.getEvent(
          'institute',
          JSON.stringify(eventData.work_shop.institute)
        );
        const supporterRequests = eventData.work_shop.supporter.map(
          (supporterId: any) =>
            this.eventService.getEvent('institute', JSON.stringify(supporterId))
        );

        return forkJoin([instituteRequest, ...supporterRequests]).pipe(
          map(([instituteData, ...supporterData]) => {
            this.institutes = instituteData;
            return {
              instituteData: instituteData,
            };
          })
        );
      })
    );
  }
}
