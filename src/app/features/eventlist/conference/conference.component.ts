import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, mergeMap } from 'rxjs';
import { ChangeService } from 'src/app/services/change.service';
import { EventService } from 'src/app/services/event.service';


interface Event {
  'user-role': any;
  'meeting': '';
  'innovation_cafe': {
     'institute':any
  };
 }
@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent implements OnInit {
  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 100, // Change slides every 1000ms (1 second)
    },
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },
  };
  changeSlide() {
    const swiperContainer = document.querySelector('.swiper-container') as any;
    if (swiperContainer) {
        const swiper = swiperContainer.swiper;
        swiper.slideNext();
    }
  }
  
  event: any;
  institutes:any;
  users:any
  supporters:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    public changeSerice: ChangeService
    ) {}
    loading = false; 
    setLoading(){
      if(this.event!==null){  
        setTimeout(() => {
          this.loading = true
        }, 1000);
      }
    }
    ngOnInit(): void {
      window.scroll(0,0);
    const eventId = this.route.snapshot.params['id'];
    const eventTitle = this.router.url.split('/')[2];
    this.eventService.getEvent(eventTitle.toLowerCase(), eventId).subscribe(
      event => {
        this.event = event;
        this.users = this.event['user-role'];
        this.institutes = this.event['conference'].institute;
        this.setLoading();
      },
      error => {
        console.error('Error fetching event data:', error);
      }
    );
  }
}
