import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import {UserService} from '../../../../../services/user.service';
import {User} from '../../../../../models/User';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment = new Comment(
    0,
    0,
    'Loading...',
    'Loading...',
    'Loading...'
  );

  user: User = new User(0,
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...'
  );

  constructor( private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(this.comment.id).subscribe((user) => {
      this.user = user;
    });
  }
}
