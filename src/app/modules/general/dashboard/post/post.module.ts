import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PostRoutingModule } from './post-routing.module';;
import {PostItemComponent} from "./post-item/post-item.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostComponent} from "./post.component";
import {JwPaginationModule} from "jw-angular-pagination";
import {UserModule} from "../user/user.module";
import {CommentModule} from "../comment/comment.module";


@NgModule({
  declarations: [
    PostItemComponent,
    PostDetailComponent,
    PostComponent
  ],
  exports: [
    PostItemComponent,
    PostDetailComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    JwPaginationModule,
    UserModule,
    CommentModule
  ]
})
export class PostModule { }
