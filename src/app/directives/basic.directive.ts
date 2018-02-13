import {Directive,ElementRef,OnInit,Renderer2,HostListener,HostBinding} from '@angular/core';

@Directive({
selector:'[basic]'
})

export class basicDirective implements OnInit  {

//constructor(private elementRef : ElementRef){}

//ngOnInit() {
//  this.elementRef.nativeElement.style.backgroundColor='green';
//}

constructor(private elementRef : ElementRef, private renderer:Renderer2){}
@HostBinding('style.backgroundColor') color='blue'
ngOnInit() {
//this.renderer.setStyle(this.elementRef.nativeElement,'background-color','aqua')

}
@HostListener('mouseenter') mouseover(eventdata:Event)
{
  this.color='red';
//this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red')
  }
  @HostListener('mouseleave') mouseleave(eventdata:Event)
  {
//this.renderer.setStyle(this.elementRef.nativeElement,'background-color','green')
this.color='blue';
  }


}
