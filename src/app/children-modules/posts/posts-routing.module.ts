import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentComponent, PostsComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':id', component: CommentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
