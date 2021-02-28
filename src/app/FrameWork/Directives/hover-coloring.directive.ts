import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverColoring]'
})
export class HoverColoringDirective  {
  constructor(private element: ElementRef) { }
  oldColor: string = this.element.nativeElement.style.color;
  @HostBinding('style.color') color = this.oldColor;
  @HostListener('mouseenter') mouseenter(eventData:  Event) {
    this.color = this.element.nativeElement.getAttribute('data-color');
  }
  @HostListener('mouseleave') mouseleave(eventData:  Event) {
    this.color = this.oldColor;
  }
}
