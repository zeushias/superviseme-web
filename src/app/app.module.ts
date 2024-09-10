import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilRComponent } from './accueil-r/accueil-r.component';

//import { MatDatepickerInput, MatDatepickerModule } from '@angular/material/datepicker';
//import { MatNativeDateModule } from '@angular/material/core';
//import { MatInputModule } from '@angular/material/input';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { fadeInOnEnterAnimation } from 'angular-animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';
import { AuthComponent } from './jwt/auth.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    AccueilRComponent
  ],

  imports: [
    BrowserModule,
	AppRoutingModule,
    HttpClientModule, ReactiveFormsModule
//     FormsModule,
//     MatFormFieldModule,
// 	MatDatepickerModule
  ],

  exports: [
//     MatFormFieldModule,
// 	MatInputModule,
// 	MatDatepickerInput,
// 	MatDatepickerModule,
// 	MatNativeDateModule
  ],

  providers: [//LoginComponent, MatDatepickerModule
  ],

  bootstrap: [
	AppComponent
	//LoginComponent
  ]

})
export class AppModule { }
