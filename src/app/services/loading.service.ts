// data.service.ts
import { Injectable } from '@angular/core';
import { is } from 'date-fns/locale';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class LoadingService {
 private dataSource = new Subject<boolean>();
 loading$ = this.dataSource.asObservable();

 constructor() { }

 changeData(isloading:boolean) {
    this.dataSource.next(isloading);
 }
}
