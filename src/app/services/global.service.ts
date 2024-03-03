import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class GlobalService {
  eventlist() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
