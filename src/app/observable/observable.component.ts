import { Component, OnInit,OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import{UsersService} from '../users.service';
import 'rxjs/Rx'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit,OnDestroy {
  Myobservable1:Subscription;
Myobservable2:Subscription;
  constructor(private usersService:UsersService) { }

  ngOnInit() {
    const Numbers=Observable.interval(1000);
     this.Myobservable1 = Numbers.subscribe((number:Number)=>{
        console.log(number);

    });

  const myObservable=Observable.create((observer :Observer<string>)=>{
setTimeout(()=>{
  observer.next('First package')
},2000);
setTimeout(()=>{
  observer.next('Second package')
},4000);
setTimeout(()=>{
  //observer.error('First package');
  observer.complete();
},5000);
setTimeout(()=>{
  observer.next('Third package')
},6000);

  });
 this.Myobservable2 =  myObservable.subscribe(
    (message:string)=>{console.log(message);},
    (message:string)=>{console.log(message);},
    ()=>{console.log('Complete');}

  );
  }
OnActivate(){
this.usersService.userActivated.next();
}
  ngOnDestroy(){
    console.log('Destroed');
    this.Myobservable1.unsubscribe();
    this.Myobservable2.unsubscribe();
  }

}
