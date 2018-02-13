import { Component, OnInit,EventEmitter,Output,ViewChild,ElementRef  } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
@Output() callParent=new EventEmitter<{Name:string,details:string}>();
@ViewChild('testme') testme: ElementRef;
  constructor() { }


  ngOnInit() {
  }

   Buttoncliked(test){
     console.log(this.testme.nativeElement.value)
  //   alert(this.testme.value);
  //   alert(test.value);
  this.callParent.emit({Name:"Master3",details:"details"})

  }
}
