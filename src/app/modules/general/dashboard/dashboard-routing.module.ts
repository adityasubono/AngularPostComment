import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {PostDetailComponent} from "./post/post-detail/post-detail.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },

  {
    path: ':id',
    component: UserDetailComponent,
  },

  {
    path: 'post/:id',
    component: PostDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
