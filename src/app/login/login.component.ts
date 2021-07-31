import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  f = true;
  users = [];
  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    localStorage.clear();
    this.userService.getUser().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
    console.log(this.users);
  }
  login(loginForm) {
    console.log(this.users);
    for (let user of this.users) {
      if (
        user.email == loginForm.value.email &&
        user.password == loginForm.value.password
      ) {
        localStorage.setItem('currentUser', user.email);
        this.router.navigateByUrl('home');
        return;
      }
    }
    this.f = false;
    console.log('invalid user');
  }
  register(loginForm) {
    this.router.navigateByUrl('register');
  }
}

class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
