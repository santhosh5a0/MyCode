import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
 genders = ['male', 'female'];
 forbiddenUserNames=['abc','qwe']
signUpForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm=new FormGroup({
      'userdata':new FormGroup({
        'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails.bind(this))
      }),
'gender':new FormControl('male'),
'hobbies':new FormArray([])

    });

    //this.signUpForm.valueChanges.subscribe(
      //(value)=>console.log(value)
  //);
  //  this.signUpForm.statusChanges.subscribe(
      //(status)=>console.log(value)
    //);
  }
onSubmit() {
  console.log(this.signUpForm);
}
AddHobby() {
const ctrl=new FormControl(null,Validators.required);
(<FormArray>this.signUpForm.get('hobbies')).push(ctrl);
//console.log(this.signUpForm.get('hobbies').controls);
}
forbiddenNames(control: FormControl): {[s : string]: boolean} {
//  alert("in");
if(!this.forbiddenUserNames.indexOf(control.value))
{
  return {'nameIsForbidden':true};
}
//return null;
  return {'nameIsForbidden':false};
}



forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
const promise = new  Promise<any>((resolve,reject)=> {
setTimeout(()=>{
  if(control.value ==="redisanthosh@gmail.com")
  {   resolve({'emailIsforbidden':true})
} else{ resolve({'emailIsforbidden':false}) };
console.log(this.signUpForm);
}, 1500);
});
return promise;
}


}
