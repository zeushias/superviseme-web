import { Component, OnInit, NgModule } from '@angular/core';
//import { UserService } from './user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { User } from '../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  email: string = '';
  password: string = '';
  showWrongMsg: boolean = false;
  showRequiredMsg: boolean = false;
  message: any;

  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.controle()) {
      this.showRequiredMsg = true;
    }
    this.getHomeForAdmin();
  }

  getHomeForAdmin() {
    this.router.navigate(['/admin']);
  }

  getHome() {
    this.router.navigate(['/home']);
  }

  controle(): boolean {
      if (this.user.email === '' || this.user.email === null || this.user.password === '' || this.user.password === null) {
        return true;
      }
      return false;
  }

}
