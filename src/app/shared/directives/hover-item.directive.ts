import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverItem]'
})
export class HoverItemDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'shadow-yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'shadow-yellow');
  }

}
