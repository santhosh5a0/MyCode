import { Injectable,EventEmitter  } from '@angular/core';

@Injectable()
//this is used to inject service into another service
export class LoggingService {
  Status:boolean=true;

//Communication between 2 services
StatusUpdated=new EventEmitter<String>();
 //ChangeStatus(){
  //Status=!Status;
//}

ChangeStatus(){
 this.Status=!this.Status;
 alert(this.Status)
 return this.Status;
}
  constructor() { }

}
