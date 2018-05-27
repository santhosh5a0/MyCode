import { Pipe,PipeTransform } from "@angular/core";
@Pipe ({
name:'Shorten'
})
export class ShortenPipe implements PipeTransform {
transform(value: any,limit: number,limit1: number){
  return value+'shorten';
}

}
//value| shorten
//value| shorten:15:17


//we ahve bing asyn data in view when normal string interpolation dont work
//we have use like This

//value|async
