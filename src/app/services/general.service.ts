import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public log(mass: string){
    console.log(mass)
  }
  public alert(mass: string){
    alert(mass)
  }
  public username :string ='defualt';
}