import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersResolveService} from "./children-modules/user/services";
import {PostsResolveService} from "./children-modules/posts/services";

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./children-modules/user/user.module').then(m => m.UserModule),
    resolve: {allUsers: UsersResolveService}
  },
  {
    path: 'posts',
    loadChildren: () => import('./children-modules/posts/posts.module').then(m => m.PostsModule),
    resolve: {allPosts: PostsResolveService}
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
