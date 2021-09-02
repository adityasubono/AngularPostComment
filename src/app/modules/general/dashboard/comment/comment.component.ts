import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../../../services/comment.service";
import {Comment} from "../../../../models/Comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  // @ts-ignore
  comments: Comment[] = [
    new Comment(
      0, 0, '', '', ''
    ),
  ];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }

}
