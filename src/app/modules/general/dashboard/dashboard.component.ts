import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/User";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() user: User = new User(0,
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...'
  );

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('isi user', this.user);
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
