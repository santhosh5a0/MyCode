import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
ParentElements=[{Name:"Master1",details:"details"},{Name:"Master2",details:"details"}]
  constructor() { }
OnParentCall(ServerData:{Name:string}){
  this.ParentElements.push({Name:ServerData.Name,details:"details"})
//  console.log(this.ParentElements);
}
  ngOnInit() {
  }

}
