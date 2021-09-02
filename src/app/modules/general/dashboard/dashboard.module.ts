import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import {PostModule} from "./post/post.module";
import {CommentModule} from "./comment/comment.module";
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CommentComponent,
    NavbarDashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PostModule,
    CommentModule,
  ]
})
export class DashboardModule { }
