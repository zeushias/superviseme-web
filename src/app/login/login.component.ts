import { Component, OnInit } from '@angular/core';
//import { UserService } from './user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      }
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.username, this.loginForm.password).subscribe(
            data => {
              this.authService.storeToken(data.token);
              console.log('Login successful, token stored.');
            },
            error => {
              console.error('Login failed', error);
            }
    );
    this.getHomeForAdmin();
  }

  login() {

  }

  getHomeForAdmin() {
    this.router.navigate(['/admin']);
  }

  getHome() {
    this.router.navigate(['/home']);
  }

  controle(): boolean {
      return false;
  }

}
