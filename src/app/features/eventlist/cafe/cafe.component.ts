import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, mergeMap, of } from 'rxjs';
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
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss'],
  providers:[EventService]
})
export class CafeComponent implements OnInit {
  eventId!: number;
  event: any;
  users:any
  eventfound: boolean = true;
  institutes:any
  supporters:any
  instituteId!:number

  constructor(private route: ActivatedRoute,private router:Router,private eventService:EventService,public changeSerice:ChangeService) {}
  loading = false; 
  setLoading(){
    if(this.event!==null){  
      setTimeout(() => {
        this.loading = true
      }, 1000);
    }
  }
  ngOnInit() {
    window.scroll(0,0);
    const eventId = this.route.snapshot.params['id']
    const eventTitle = this.router.url.split('/')[2]
      this.eventService.getEvent(eventTitle.toLowerCase(), eventId).subscribe(event=>{
        this.event=event
        this.users = this.event['user-role']
        this.institutes = this.event['innovation_cafe'].institute
        this.setLoading()
      })

    // this.event = this.eventService.events.find(event => event.id === +this.route.snapshot.params['id'])
    // console.log(this.event)
    // if (!this.event){
      //   this.eventfound = false;
      //   this.router.navigate(['/events']);
      // }
      // this.eventService.getEvent(eventTitle.toLowerCase(), eventId).pipe(
      //   map((event: any) => event),
      //   mergeMap((eventData: any) => {
      //     const instituteRequest = this.eventService.getEvent('institute', JSON.stringify(eventData.innovation_cafe.institute));
      //     const supporterRequests = eventData.innovation_cafe.supporter.map((supporterId: any) => this.eventService.getEvent('institute', JSON.stringify(supporterId)));
  
      //     return forkJoin([instituteRequest, ...supporterRequests]).pipe(
      //       map(([instituteData, ...supporterData]) => {
      //         this.institutes = instituteData;
      //         this.supporters = supporterData; // Assuming you want to store the supporter data in this.supporter
      //         return {
      //           instituteData: instituteData,
      //           supporterData: supporterData,
      //           eventData: eventData,
      //         };
      //       })
      //     );
      //   }),
      // ).subscribe(
      //   (data: any) => {
      //     this.event = data.eventData;
      //     this.institutes = [data.instituteData];
      //     this.users = this.event['user-role'];
      //     this.supporters = data.supporterData;
      //   }
      //   // (err)=>{}
      // )
      
      // this.eventService.getEvent(eventTitle.toLowerCase(),eventId).subscribe(console.log)
  }
}
