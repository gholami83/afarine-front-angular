import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-institute',
  templateUrl: './card-institute.component.html',
  styleUrls: ['./card-institute.component.scss']
})
export class CardInstituteComponent {
@Input() institute:any 
}
