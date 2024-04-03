import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { eventInterface } from 'src/app/shared/interfaces/event-interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
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
      institute: {
        name:'',
        logo:'',
      },
      executer: [],
      start_date: '',
    },
  ];
  BASE_URL = 'https://afarine.noarino.ir';

  constructor(private http:HttpClient) { }
  getEvents(name:string){
    return this.http.get<eventInterface[]>(this.BASE_URL + name)
  }
}
