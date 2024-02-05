import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-poster',
  templateUrl: './card-poster.component.html',
  styleUrls: ['./card-poster.component.scss']
})
export class CardPosterComponent {
@Input() event:any
}
