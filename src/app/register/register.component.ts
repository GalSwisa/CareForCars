import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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

  register(loginForm) {
    if (loginForm.value.password2 != loginForm.value.password) {
      alert(loginForm.value.password2 + loginForm.value.password);
      return;
    }
    this.apiService.getSpecificUser(loginForm.value.email).subscribe((data) => {
      if (data.length == 0) {
        let user = new User(
          loginForm.value.email,
          loginForm.value.name,
          loginForm.value.password
        );
        console.log(user);
        this.apiService.addUser(user).subscribe((data) => {
          console.log(data);
          if (data != null) {
            localStorage.setItem('currentUser', user.email);
            this.router.navigateByUrl('home');
            return;
          }
        });
      } else {
        alert('email already exist');
      }
    });
  }

  cancel(loginForm) {
    this.router.navigateByUrl('login');
  }
}

class User {
  email: string;
  name: string;
  password: string;

  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}
