import {
  Component,
  ElementRef,
  Inject,
  NgModule,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Router, Route, RouterOutlet } from '@angular/router';
import {
  Observable,
  Observer,
  interval,
  map,
  of,
  from,
  fromEvent,
  tap,
  take,
  takeWhile,
} from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GeneralService } from 'src/app/services/general.service';
import GlobalService from 'src/app/services/global.service';
import { HttpClient } from '@angular/common/http';
import { eventTypeList } from 'src/app/shared/models/event-type-list';
import { eventInterface } from 'src/app/shared/interfaces/event-interface';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { toDate, format as formatJalali } from 'date-fns-jalali';
import { ChangeService } from 'src/app/services/change.service';
import { EventService } from 'src/app/services/event.service';
import { EventsService } from 'src/app/services/events.service';
import { LoadingService } from 'src/app/services/loading.service';
import { instituteService } from 'src/app/services/institute.service';

interface Institute {
  name: string;
  // Add other properties as needed
 }
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss'],
})
export class EventlistComponent implements OnInit {
  loading = true;
  loaded = false
  public events: eventInterface[] = [
    {
      id: 0,
      poster: '',
      title: '',
      date: '',
      price: '',
      location: '',
      type_name: '',
      description: '',
      institute: [],
      executer: [],
      start_date: '',
    },
  ];
  bgStyle: string = '';

  eventfound = true;
  constructor(
    private generalService: GeneralService,
    @Inject('api_url') url: string,
    private router: Router,
    private ApiService: ApiService,
    private http: HttpClient,
    private changeService:ChangeService,
    private eventService:EventService,
    private eventsService:EventsService,
    private loadingService:LoadingService,
    private institutesService:instituteService,
  ) {  }
  sendData() {
    if(this.events[0].poster!=""){
      setTimeout(() => {
        this.loaded = true
      }, 500);
    }
  }
   log() {
    this.generalService.log(this.generalService.username);
  }
  onChange(event: Event) {
    this.generalService.username = (event.target as HTMLInputElement).value;
    this.router.navigate(['event'], {
      queryParams: { eventfound: 'true' },
      fragment: 'title',
    });
  }
  public http$!: Observable<any[]>;
  public Event$!: Observable<any[]>;

  getTranslateEvent(name: string) {
    return this.changeService.getTranslateEvent(name);
  }

  changeJalaiDate(data: string) {
    return this.changeService.changeJalaiDate(data);
  }
  formatPriceToPersian(dateString: string) {
    return this.changeService.formatPriceToPersian(dateString)
  }
  BASE_URL = 'https://afarine.noarino.ir';
  @ViewChild('inputFilter', { static: true }) input!: ElementRef;
  ngOnInit(): void {
    window.scroll(0,0);
    // const interval$: Observable<any> = new Observable((observer: Observer<number>) => {
      //     vlet count = 0;
      //     setInterval(() => {
        //       observer.next(count++);
        //       if (count == 5) {
          //         observer.complete();
          //       }
          //     }, 1000);
          //   }
    // );
    // of(['arr','ar1','ar2']).subscribe(console.log)
    // of('arr', 'ar1', 'ar2').subscribe(console.log);
    // from(['arr', 'ar1', 'ar2']).subscribe(console.log);
    // from is of that should be list in that

    // this.Event$= this.http$.pipe(
      //   map((todo) => todo.filter((todo)=> todo.completed === true))
      //   )
      // this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(console.log)
      
      this.eventsService.getEvents('/api/events/all/').subscribe((events) => {
        this.events = events
      this.sendData()});
      // this.http.get(this.BASE_URL + '/api/events/all/').subscribe(console.log);
      
      
      // fromEvent(this.input.nativeElement, 'input').subscribe();
      fromEvent(document, 'click')
      .pipe(
        map((event) => event as MouseEvent),
        // tap(item => console.log(item)),
        map((item) => {
          return { x: item.offsetX, y: item.offsetY };
        }),
        takeWhile((item) => item.x < 100),
        tap((item) => console.log(item))
        )
        // .subscribe();
      }
      getInstitute(instituteId: number) {
        let instituteObject: any ;
        // this.eventService.getEvent('institute', instituteId.toString()).subscribe((institute)=>instituteObject=institute);
        // console.log(instituteObject)
        return instituteObject
     }
    }
    
