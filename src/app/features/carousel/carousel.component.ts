import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  constructor(private router:Router,private routernavigate:ActivatedRoute){
  }
  navigate(){
    this.router.navigate(['about'],{relativeTo:this.routernavigate})
  }
}
