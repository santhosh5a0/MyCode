import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
num:number=10;
checbuttonstatus=true;
 test1: string = `Bob Bobbington`;
  constructor() { }

  ngOnInit() {
  }
  sendMsg(event:Event) {
  let test: string = `Bob Bobbington`;
test  =(<HTMLInputElement>event.target).value;
console.log(test);


     }
}
