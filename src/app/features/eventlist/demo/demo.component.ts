import { Component, OnInit } from '@angular/core';
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
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  institutes: any;
  supporters:any
  event!: any;
  users: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    public changeSerice: ChangeService
  ) {}
  loading = false; 
  setLoading(){
    if(this.event!==null){  
      setTimeout(() => {
        this.loading = true
      }, 1000);
    }
  }
  ngOnInit(): void {
    window.scroll(0,0);
    const eventId = this.route.snapshot.params['id'];
    const eventTitle = this.router.url.split('/')[2];
    this.eventService.getEvent(eventTitle.toLowerCase(), eventId).subscribe(event=>{
      this.event=event
      this.users = this.event['user-role']
      this.institutes = this.event['demo_day'].institute
      this.setLoading()
    })
  }
}
