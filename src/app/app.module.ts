import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MatDatepickerInput, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { fadeInOnEnterAnimation } from 'angular-animations';

@NgModule({
	
  declarations: [
    AppComponent,
    LoginComponent
  ],
  
  imports: [
    BrowserModule, 
	AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule, 
	MatDatepickerModule
  ],
  
  exports: [
    MatFormFieldModule, 
	MatInputModule, 
	MatDatepickerInput, 
	MatDatepickerModule, 
	MatNativeDateModule
  ],
	
  providers: [LoginComponent, MatDatepickerModule],
  
  bootstrap: [
	AppComponent, 
	LoginComponent
  ]
  
})
export class AppModule { }
