import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilRComponent } from './accueil-r/accueil-r.component';
import { MdpComponent } from './mdp/mdp.component';
import { ProfilComponent } from './profil/profil.component';

import { AffectationComponent } from './affectation/affectation.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ImportationComponent } from './importation/importation.component';
import { StageComponent } from './stage/stage.component';
import { PersonneComponent } from './personne/personne.component';
import { UniversiteComponent } from './universite/universite.component';
import { AnneeComponent } from './annee/annee.component';

const routes: Routes = [
  // login
  {path: 'login', component: LoginComponent},
  {path: 'home', component: AccueilComponent},
  {path: 'admin', component: AccueilRComponent},
  {path: 'mdp', component: MdpComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'affectation', component: AffectationComponent},
  {path: 'entreprise', component: EntrepriseComponent},
  {path: 'importation', component: ImportationComponent},
  {path: 'stage', component: StageComponent},
  {path: 'personne', component: PersonneComponent},
  {path: 'universite', component: UniversiteComponent},
  {path: 'annee', component: AnneeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
