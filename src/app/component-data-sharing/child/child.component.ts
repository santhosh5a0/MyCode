import { Component, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('SrvElement') element:{Name:string,details:string};
  constructor() { }

  ngOnInit() {
//  console.log(this.element);
  }

}
