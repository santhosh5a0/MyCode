import {NgModule} from '@angular/core'
import { Routes,RouterModule } from '@angular/router';


import { RoutesComponent } from './routes/routes.component';
import { DirectiveComponent } from './directive-old/directive.component';
import { DirectivesComponent } from './directives/directives.component';
import { Routes2Component } from './routes/routes2/routes2.component';
import {AuthService} from './auth.service'
import {AuthGuard} from './auth-guard.service'
import { ObservableComponent } from './observable/observable.component'
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';



const AppRoutes:Routes=[
  {path:'',component:ReactiveFormsComponent},
  {path:'a',component:DirectiveComponent},
  {path:'b',canActivate:[AuthGuard],component:DirectivesComponent},
  //you can pass value to the compoenent form here
//  {path:'b',canActivate:[AuthGuard],component:DirectivesComponent , data:{message:'page not found'}},
  {path:'c/:id',component:Routes2Component}
]

@NgModule({
imports:[
  RouterModule.forRoot(AppRoutes)
],
exports:[RouterModule]

})
export class AppRoutingModule{


}
