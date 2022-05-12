import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CardDesiegn]'
})
export class CardDesiegnDirective {
  @Input() backColor:string="red"
  constructor(private elemRef:ElementRef) { 
    elemRef.nativeElement.style.borderRadius="25px";
    elemRef.nativeElement.style.boxShadow="5px 10px gray"
    elemRef.nativeElement.style.backgroundColor="${this.backColor}"
  }
  @HostListener('mouseover') onMouseOver()
  {
    this.elemRef.nativeElement.style.boxShadow="10px 20px gray"
  }
  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.boxShadow="5px 10px gray"
  }

}
