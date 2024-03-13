import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class ScrollService {
 public scrollEvent = new EventEmitter<boolean>();

 constructor() {
    window.addEventListener('scroll', () => {
      this.scrollEvent.emit(window.screenY > 0);
    });
 }
}