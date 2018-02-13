import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
Mybutton(){

  this.router.navigate(["/c/1"]);

  //other ways to navigate things
  //this.router.navigate(['/c',1]),{queryParams:{allowEdit:true}};
}
}
