import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'afarine-site';
  ngOnInit(): void {
    window.scroll(0,0);
    initFlowbite();
  }
  isloading = true
  constructor(){
    setTimeout(() => {
      this.isloading = false; 
    }, 2000);
  }
}
