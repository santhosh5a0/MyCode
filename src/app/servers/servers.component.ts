import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', You can use app-server directive to load component <div app-servers></div>
  //selector: '.app-servers', you can use class for component  <div class="app-servers"></div>
  //id and hover also dont work for above selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
