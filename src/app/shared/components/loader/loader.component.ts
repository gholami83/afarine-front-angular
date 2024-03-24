import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
   wrapper = document.querySelector('.wrapper svg')
   btnDraw = document.querySelector('.btn-draw')
   btnErase = document.querySelector('.btn-erase')
  
  // We are only adding and removing the 'active' class,
  // the entire animation is defined in the CSS code
   draw() {
    if (this.wrapper) {
      this.wrapper.classList.add('active');
    }
  }
  
  erase() {
    if (this.wrapper) {
    this.wrapper.classList.remove('active')
  }
  }
}
