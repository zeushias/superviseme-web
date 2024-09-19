import { Component, OnInit, NgModule } from '@angular/core';
//import { UserService } from './user.service';
import { Router } from '@angular/router';
//import { FormGroup, Validators, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { User } from '../classes/user';
import { Personne } from '../classes/personne';
import { AuthService } from '../services/auth.service';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  personne: Personne | null = null;
  email: string = '';
  password: string = '';
  showWrongMsg: boolean = false;
  showRequiredMsg: boolean = false;
  message: any;

  constructor(private router: Router, private authService: AuthService,
    private personneService: PersonneService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // contrôle
    if (this.controle()) {
      this.showRequiredMsg = true;
    }
    // auth
    /*this.authService
          .login({ username: this.email, password: this.password })
          .subscribe((response) => {
            this.authService.storeToken(response.token);
            console.log('Login successful');
            // recherche de profil
            console.log('Recherche du profil');

            this.personneService.findByEmail(this.email).subscribe(
              (result: Personne) => {
                this.personne = result;
                // Additional logic after receiving the Personne object
              },
              (error) => {
                console.error('Error fetching personne:', error);
                // Handle the error appropriately
              }
            );
          });
    */
    // rôle
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
