import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Directive({
 selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {
 constructor(private el: ElementRef, private renderer: Renderer2, private scrollService: ScrollService) {
    this.scrollService.scrollEvent.subscribe(show => {
      if (show) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }
    });
 }
 @HostListener('click')
 scrollToTop() {
    window.scrollTo({ top: 0,left:0, behavior: 'smooth' });
 }
}