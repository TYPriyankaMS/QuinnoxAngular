import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  @HostBinding('style.background') backgroundColor: string;
  @HostBinding('style.color') color: string;
  constructor(private elementRef: ElementRef) {
   //this.elementRef.nativeElement.style.backgroundColor="green";
  }

  @HostListener('mouseenter')
  mouseEnterTableListenerI() {
    this.backgroundColor = 'gray';
    this.color='white';
  }

  @HostListener('mouseleave')
  mouseLeaveTableListenerI() {
    this.backgroundColor = 'white';
    this.color='black';
  }
  

}
