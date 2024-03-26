import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, of } from 'rxjs';
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
  instituteId!:number

  constructor(private route: ActivatedRoute,private router:Router,private eventService:EventService,public changeSerice:ChangeService) {}
  ngOnInit() {
    const eventId = this.route.snapshot.params['id']
    const eventTitle = this.router.url.split('/')[2]
    // this.event = this.eventService.events.find(event => event.id === +this.route.snapshot.params['id'])
    // console.log(this.event)
    // if (!this.event){
      //   this.eventfound = false;
      //   this.router.navigate(['/events']);
      // }
      this.eventService.getEvent(eventTitle.toLowerCase(), eventId).pipe(
        map((event: any) =>{
          return event
        }),
        mergeMap((eventData:any)=>{
          return this.eventService.getEvent('institute',JSON.stringify(eventData.innovation_cafe.institute)).pipe(
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
      
      // this.eventService.getEvent(eventTitle.toLowerCase(),eventId).subscribe(console.log)
  }
}
