import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, mergeMap } from 'rxjs';
import { ChangeService } from 'src/app/services/change.service';
import { EventService } from 'src/app/services/event.service';

interface Event {
  'user-role': any;
  'meeting':''
 }
@Component({
  selector: 'app-startapp',
  templateUrl: './startapp.component.html',
  styleUrls: ['./startapp.component.scss']
})
export class StartappComponent {
  event: any;
  users:any
  institutes:any
  supporters:any
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
      this.institutes = this.event['startup_weekend'].institute
      this.setLoading()
    })
  }
}
