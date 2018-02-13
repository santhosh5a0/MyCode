import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

firstNavParam:boolean;
  constructor() {
 this.firstNavParam=true;
   }

  ngOnInit() {
  }
  sendMsg(event:Event) {
this.firstNavParam=false;
}
getcolor(){
return "red";

}
}
