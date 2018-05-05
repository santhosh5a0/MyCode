import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f') SignUpForm:NgForm;

defaultQuestion="pet";
default
genders=["male","female"];
  constructor() {

  }

  ngOnInit() {


  }

  SetUserName(){
  this.SignUpForm.setValue({
  UserData:{username:"test",email:"test@te.co"},
  secret:"pet",
  secterAnswer:"jacy",
  gender:"male"

  });

  }
//OnSubmit(form:ElementRef){
  //console.log(form);
//}
OnSubmit(form:NgForm){
  console.log(this.SignUpForm);
  this.SignUpForm.reset();
}
}
