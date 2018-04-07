import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive-old/directive.component';
import { ComponentDataSharingComponent } from './component-data-sharing/component-data-sharing.component';
import { ParentComponent } from './component-data-sharing/parent/parent.component';
import { ChildComponent } from './component-data-sharing/child/child.component';
import { Child2Component } from './component-data-sharing/child2/child2.component';
import { DirectivesComponent } from './directives/directives.component';
import { basicDirective } from './directives/basic.directive';
import { UnlessStructualDirective } from './directives/unless-structual.directive';
import { ServicesComponent } from './services/services.component';
import { RoutesComponent } from './routes/routes.component';
import { Routes2Component } from './routes/routes2/routes2.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthService} from './auth.service'
import {AuthGuard} from './auth-guard.service';
import { ObservableComponent } from './observable/observable.component'
import {UsersService} from './users.service';




@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    DatabindingComponent,
    DirectiveComponent,
    ComponentDataSharingComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    DirectivesComponent,
    basicDirective,
    UnlessStructualDirective,
    ServicesComponent,
    RoutesComponent,
    Routes2Component,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  //  RouterModule.forRoot(AppRoutes)
  AppRoutingModule
  ],
  providers: [AuthService,AuthGuard,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
