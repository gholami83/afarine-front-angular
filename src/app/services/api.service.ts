import { Injectable, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ReplaySubject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ApiService implements OnInit{

    public ngOnInit(): void {    
        this.getData()
    }
    getData():any{
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((resposne)=>{return resposne.json()})
    }

}