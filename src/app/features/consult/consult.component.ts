import { Component } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.scss',
})
export class ConsultComponent {
  loading: boolean = true;
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.loading = false
    },500)
}
}
