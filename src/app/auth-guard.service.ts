// import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

// import {Observable} from 'rxjs/observable';
// import{Injectable} from '@angular/core';
// import {AuthService} from './auth.service'
// @Injectable()
// export class AuthGuard implements CanActivate {

// constructor(private authService:AuthService,private router: Router){}
// //we can also have candeactivate method which will be used whenever we redirect to another component
// //and there is data not saved then we can use this method

// //resolver is used to pre load some data and always returns compoenet in the end
// canActivate(
//   route:ActivatedRouteSnapshot,
//   state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean  {
//       return this.authService.isAuthenticated()
//         .then(
//   (authenticated:boolean)=>{
//     alert(authenticated);
//   //  return false;
//     if(authenticated){
//       return true;
//     }else{
//         this.router.navigate(['/d']);
//     }
//   }
// );
// }

// }
