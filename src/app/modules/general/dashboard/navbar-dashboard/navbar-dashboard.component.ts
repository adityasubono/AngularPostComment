import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/User";

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {

  @Input() user: User = new User(0,
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...'
  );

  users: User[] = [new User(0,
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...'
  )];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
