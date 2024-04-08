import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  loading = true
  constructor(private loadingService:LoadingService,
    private router:Router
    ){}
  ngOnInit(): void {
    window.scroll(0,0);
  }
  ngAfterViewInit(): void {
      setTimeout(()=>{
        this.loading = false
      },500);
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('translate-x-full');
    }
  }

  openNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
      sidenav.style.width = "250px";
    }
  }

  closeNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
      sidenav.style.width = "0";
    }
  }
}
