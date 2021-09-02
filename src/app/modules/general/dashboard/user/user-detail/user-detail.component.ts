import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../../models/User";
import {UserService} from "../../../../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User = new User(
    0,
    'Loading...',
    'Loading...',
    'Loading...', 'Loading',
    'Loading...'
  );

  constructor(private userService: UserService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUserById(this.route.snapshot.params.id);
  }

  getUserById(id: number): any {
    this.userService.getUser(id)
      .subscribe(
        (data) => {
          this.user = data;
          console.log('User', data);
        },
        error => {
          console.log(error);
        });
  }
}
