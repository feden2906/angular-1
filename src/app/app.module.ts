import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {
  CommentComponent,
  CommentsComponent,
  HomePageComponent,
  PostComponent,
  PostsComponent,
  UserComponent,
  UsersComponent,
  UserDetailsComponent,
  PostDescriptionComponent,
  CommentDetailsComponent
} from "./components";


let routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'posts/:id', component: PostDescriptionComponent},
  {path: 'comments/:id', component: CommentDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CommentsComponent,
    HomePageComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentComponent,
    UserDetailsComponent,
    PostDescriptionComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
