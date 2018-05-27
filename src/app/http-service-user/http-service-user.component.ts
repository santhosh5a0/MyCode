import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpServicesService} from '../http-services.service';

@Component({
  selector: 'app-http-service-user',
  templateUrl: './http-service-user.component.html',
  styleUrls: ['./http-service-user.component.css']
})
export class HttpServiceUserComponent implements OnInit {
getAppName=this.service.getAppName();
  constructor(private service: HttpServicesService) { }

  ngOnInit() {
  }
OnSave(){
this.service.storeData("Server1").subscribe(
  (response)=>console.log(response),
  (error)=>console.log(error)
)
}
onSave1() {
    this.service.storeData("")
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
}
}
