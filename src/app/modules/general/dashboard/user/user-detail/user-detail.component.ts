import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../../models/User";
import {UserService} from "../../../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Address} from "../../../../../models/Address";

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
    'Loading...',
    '',
    'Loading...'
  );

  @Input() address: any = new Address(
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
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
          this.address = data.address;
          console.log('User', data.address);
        },
        error => {
          console.log(error);
        });
  }
}
