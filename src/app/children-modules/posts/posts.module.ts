import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {CommentComponent, CommentListComponent, PostComponent, PostsComponent} from './components';
import {PostsService} from "./services";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule {
}
