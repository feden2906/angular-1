import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPostComponent, UsersComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component: UserPostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
