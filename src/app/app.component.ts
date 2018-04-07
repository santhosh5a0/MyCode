import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{UsersService} from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Useractivated=false;
  title = 'app';
  constructor(private usersService:UsersService) { }

ngOnInit(){

  this.usersService.userActivated.subscribe(()=>{
this.Useractivated=true;

  })
}
}
