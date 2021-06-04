import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./services";
import { UserComponent, UsersComponent, PostListComponent, UserPostComponent } from './components';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ]
})
export class UserModule {
}
