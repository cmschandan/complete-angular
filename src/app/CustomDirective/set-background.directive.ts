import { Directive, ElementRef, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  // private element: ElementRef;
  constructor(private element: ElementRef) { 
    // element.nativeElement.style.backgroundColor = '#C8E6C9';
    this.element = element;
  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = '#C8E6C9';
  }

}
