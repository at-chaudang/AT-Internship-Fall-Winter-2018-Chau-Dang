import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverItem]'
})
export class HoverItemDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverItem(this.renderer, this.el);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'hoverChangeYellow');
  }

  private hoverItem(renderer: Renderer2, hostElement: ElementRef) {
    this.renderer.addClass(this.el.nativeElement, 'hoverChangeYellow');
  }

}
