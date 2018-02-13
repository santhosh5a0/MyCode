import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-routes2',
  templateUrl: './routes2.component.html',
  styleUrls: ['./routes2.component.css']
})
export class Routes2Component implements OnInit {
user:{id:number,name:string}
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
        id:this.route.snapshot.params['id'],
          name:'SAnthosh'
        }
    this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'];
        this.user.name="John"
      }
    );
  }
  //other ways to navigate things
  //this.router.navigate(['/c',1]),{queryParams:{allowEdit:true}};
  //to access data
  //this.route.snapshot.queryParams['id']
  //this.route.snapshot.fragment['id']
  //for subscribing follow same processas
  //this.route.queryParams.subscribe()
}
