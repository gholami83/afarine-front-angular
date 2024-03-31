import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'afarine-site';
  isloading:boolean = true;
  constructor(
    private loadingService: LoadingService
  ){
    // setTimeout(() => {
    //   this.isloading = false; 
    // }, 2000);
  }
  ngOnInit(): void {
    window.scroll(0,0);
    initFlowbite();
    // this.loadingService.loading$.subscribe(isloading => {
    //   this.isloading = isloading;
    // });
    // console.log(this.isloading);
  }
}
