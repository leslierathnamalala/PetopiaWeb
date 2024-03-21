import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoSpaces]'
})
export class NoSpacesDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = this.el.nativeElement.value;
    const newValue = value.replace(/\s/g, '');
    if (newValue !== value) {
      this.el.nativeElement.value = newValue;
      this.el.nativeElement.dispatchEvent(new Event('input')); 
    }
  }
}
