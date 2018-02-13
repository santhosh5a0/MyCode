import { Component, OnInit ,DoCheck} from '@angular/core';
import{LoggingService} from '../logging.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[LoggingService]
  //if addservice in providers then it will create a new services
  //or else it will us eparent service if u have any
})
export class ServicesComponent implements OnInit,DoCheck {
ComponentStaus:boolean=false
  constructor(private loggingService: LoggingService) {
this.loggingService.StatusUpdated.subscribe(
  (status:string)=>alert("New Status"+status)
);
  }

  ngOnInit() {
    console.log("ngOnInit");
      this.ComponentStaus=  this.loggingService.Status;
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  this.ComponentStaus=  this.loggingService.Status;
}

  ChangeStatus()
  {
    this.loggingService.ChangeStatus();
    this.loggingService.StatusUpdated.emit("test");
  }
}
