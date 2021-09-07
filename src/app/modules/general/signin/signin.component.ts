import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  users: User[] = [new User(0,
    '',
    '',
    '',
    '',
    ''
  )];

  submitted = false;
  formGroup !: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(40)
          ]
        ],
        acceptTerms: [false, Validators.requiredTrue]
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  retrieveUsers(): void {

    this.submitted = true;

    const login = {
      username: this.formGroup.value.username,
      password: this.formGroup.value.password
    };

    this.userService.getUsers()
      .subscribe(
        data => {
          console.log('data', data)
          const valid = this.search(login.username, login.password, data);


          if (valid) {
            alert('Username dan Password Benar');
          } else {
            alert('Username dan Password Salah');
          }

        },
        error => {
          console.log(error);
        });
  }

  // tslint:disable-next-line:typedef
  search(username: any, password: any, datas: string | any[]) {
    let userData = false;
    for (const data of datas) {
      if ((data.username === username) && (data.username === password)) {
        userData = true;
        this.router.navigate(['dashboard', data.id]);
      }
    }
    return userData;
  }

}
