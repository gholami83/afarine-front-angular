import {
  Component,
  ElementRef,
  Inject,
  NgModule,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Router, Route } from '@angular/router';
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

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss'],
})

export class EventlistComponent implements OnInit {
  // events = [
  //   {
  //     id: 0,
  //     image: 'assets/imgs/wp11572314.jpg',
  //     name: 'کارگری',
  //     date: 'سه شنبه ساعت 5 عصر',
  //     price: '5,000,000',
  //     location: 'پاساژ زیتون',
  //     executer: 'شرکت آفرینه',
  //     type: 'inovationcafe',
  //   },
  //   {
  //     id: 1,
  //     image: 'assets/imgs/wp12154950.jpg',
  //     name: 'رویداد کارآفرینی و کارگری',
  //     date: 'سه شنبه ساعت 5 عصر',
  //     price: '5,000,000',
  //     location: 'پاساژ زیتون',
  //     executer: 'شرکت آفرینه',
  //     type: 'conference',
  //   },
  //   {
  //     id: 2,
  //     image: 'assets/imgs/wp4700266.jpg',
  //     name: 'رویداد کارآفرینی و کارگری',
  //     date: 'سه شنبه ساعت 5 عصر',
  //     price: '5,000,000',
  //     location: 'پاساژ زیتون',
  //     executer: 'شرکت آفرینه',
  //     type: 'workshop',
  //   },
  //   {
  //     id: 3,
  //     image: 'assets/imgs/wp11572314.jpg',
  //     name: 'رویداد کارآفرینی و کارگری',
  //     date: 'سه شنبه ساعت 5 عصر',
  //     price: '5,000,000',
  //     location: 'پاساژ زیتون',
  //     executer: 'شرکت آفرینه',
  //     type: 'meeting',
  //   },
  //   {
  //     id: 4,
  //     image: 'assets/imgs/wp12154950.jpg',
  //     name: 'رویداد کارآفرینی و کارگری',
  //     date: 'سه شنبه ساعت 5 عصر',
  //     price: '5,000,000',
  //     location: 'پاساژ زیتون',
  //     executer: 'شرکت آفرینه',
  //     type: 'startupweekend',
  //   },
  //   {
  //     id: 5,
  //     image: 'assets/imgs/wp4700266.jpg',
  //     name: 'رویداد کارآفرینی و کارگری',
  //     date: 'سه شنبه ساعت 5 عصر',
  //     price: '5,000,000',
  //     location: 'پاساژ زیتون',
  //     executer: 'شرکت آفرینه',
  //     type: 'demoday',
  //   },
  //   {
  //     id: 6,
  //     image: 'assets/imgs/wp11572314.jpg',
  //     name: 'رویداد کارآفرینی و کارگری',
  //     date: 'سه شنبه ساعت 5 عصر',
  //     price: '5,000,000',
  //     location: 'پاساژ زیتون',
  //     executer: 'شرکت آفرینه',
  //     type: 'meeting',
  //   },
  //   {
  //     id: 7,
  //     image: 'assets/imgs/wp12154950.jpg',
  //     name: 'رویداد ��ارآفرینی و کارگری',
  //     date: 'سه شنبه ساعت 5 عصر',
  //     price: '5,000,000',
  //     location: 'پاساژ زیتون',
  //     executer: 'شرکت آفرینه',
  //     type: 'startupweekend',
  //   },
  // ];

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
      start_date:'',
    },
  ];
  bgStyle: string = '';

  eventfound = true;
  constructor(
    private generalService: GeneralService,
    @Inject('api_url') url: string,
    private router: Router,
    private ApiService: ApiService,
    private http: HttpClient
  ) {}

  public log() {
    this.generalService.log(this.generalService.username);
  }
  public onChange(event: Event) {
    this.generalService.username = (event.target as HTMLInputElement).value;
    this.router.navigate(['event'], {
      queryParams: { eventfound: 'true' },
      fragment: 'title',
    });
  }
  public http$!: Observable<any[]>;
  public Event$!: Observable<any[]>;

  public getTranslateEvent(name: string) {
    return eventTypeList.find((item: any) => {
      return item.name === name;
    })?.translateName;
  }

  
  public changeJalaiDate(data: string): string {
  
    const date = new Date(data);
    
    if (isNaN(date.getTime())) {
        console.error("Invalid date object.");
        return '';
    }
    const jalaliDateWithTime = formatJalali(date, 'yyyy/MM/dd HH:mm:ss', { locale: enUS });

    return this.formatDateToPersian(jalaliDateWithTime);
  }

   formatDateToPersian(dateString:string) {
    const persianDigits = {
      '0': '۰',
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹'
  };

  let formattedDate = dateString;
  for (const digit in persianDigits) {
    formattedDate = formattedDate.replace(new RegExp(digit, 'g'), persianDigits[digit as keyof typeof persianDigits]);
}

  return formattedDate;
}
  @ViewChild('inputFilter', { static: true }) input!: ElementRef;
  ngOnInit(): void {
  
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
    of('arr', 'ar1', 'ar2').subscribe(console.log);
    from(['arr', 'ar1', 'ar2']).subscribe(console.log);
    // from is of that should be list in that

    // this.Event$= this.http$.pipe(
    //   map((todo) => todo.filter((todo)=> todo.completed === true))
    //   )
    // this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(console.log)
    this.http
      .get<eventInterface[]>('http://afarine.inolinx.com/api/events/all/')
      .subscribe((events) => (this.events = events));
    this.http
      .get('http://afarine.inolinx.com/api/events/all/')
      .subscribe(console.log);

    fromEvent(this.input.nativeElement, 'input').subscribe();
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
      .subscribe();
  }
}

