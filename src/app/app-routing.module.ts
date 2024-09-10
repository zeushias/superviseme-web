import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilRComponent } from './accueil-r/accueil-r.component';


const routes: Routes = [
  // login
  {path: 'login', component: LoginComponent},
  {path: 'home', component: AccueilComponent},
  {path: 'admin', component: AccueilRComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
