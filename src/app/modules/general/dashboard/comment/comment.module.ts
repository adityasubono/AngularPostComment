import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentComponent} from "./comment.component";
import {CommentItemComponent} from "./comment-item/comment-item.component";


@NgModule({
  declarations: [
    CommentItemComponent
  ],
  exports: [
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
