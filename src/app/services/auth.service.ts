import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isloggedin: boolean = false; 

  constructor() { }

}
