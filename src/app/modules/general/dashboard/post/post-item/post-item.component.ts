import { PostService } from '../../../../../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../../../models/Comment';
import { Post } from '../../../../../models/Post';
import { UserService } from '../../../../../services/user.service';
import { User } from '../../../../../models/User';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post = new Post(0, 0, '', '');

  comments: Comment[] = [
    new Comment(
      0,
      0,
      'Loading...',
      'Loading...',
      'Loading...'
    ),
  ];

  user: User = new User(0,
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...'
    );

  commentShow = false;

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.getPostComments(this.post.id).subscribe((comments) => {
      this.comments = comments;
    });
    this.userService.getUser(this.post.userId).subscribe((user) => {
      this.user = user;
    });
  }

  // tslint:disable-next-line:typedef
  commentToggle() {
    this.commentShow = !this.commentShow;
  }
}
