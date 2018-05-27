//import { Injectable } from '@angular/core';
//import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable'
@Injectable()
export class HttpServicesService {

  constructor(private http: Http) {

   }
storeData(servers:any)
{
  const headers= new Headers({'content-Type': 'application/json'})
 return  this.http.post('www.sample.com/data.json',servers,
  {headers:headers});
}
getServersAspObservable()
{
return this.http.get('www.example.com/data.json')
}
getServers()
{
return this.http.get('www.example.com/data.json').map((response: Response)=>{
  const data=response.json();
  console.log(data);
  return data;
},
(error: Response)=>{
return Observable.throw(error);

});
}
getAppName()
{
return this.http.get('www.example.com/data.json').map((response: Response)=>{
  const data=response.json();
  return data;
});
}


}
