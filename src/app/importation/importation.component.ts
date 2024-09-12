import { Component, OnInit } from '@angular/core';
import { read, utils, writeFile } from 'xlsx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Assurez-vous d'importer FormsModule


@Component({
  selector: 'app-importation',
  templateUrl: './importation.component.html',
  styleUrls: ['./importation.component.css']
})
export class ImportationComponent implements OnInit {

/*   personne: Personne;
  personnes: Personne[] = [];
  entreprises: Entreprise[] = [];
  stages: Stage[] = []; */
  csvData: string[][] = [];  // Pour stocker les données du fichier CSV
  csvHeaders: string[] = [];
  list: any[] = [];
  type: string = '';
  titre: string = '';
  showExportMsg: boolean = false;
  showImportMsg: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  /* changement de valeur du sélecteur type */
  onChange($event: Event) {
    this.showExportMsg = false;
    const selectElement = $event.target as HTMLSelectElement;
    this.type = selectElement.value;
    console.log(this.type);  // Affiche la valeur sélectionnée
  }

  importer($event: any) {
    this.showImportMsg = false;
    if(this.type === ''){
      this.showImportMsg = true;
    } else {
       const file: File = $event.target.files[0];

          if (file){
            //const file = files[0]
            const reader = new FileReader();

            reader.onload = (event: any) => {
              const csv = reader.result as string;

              const lines = csv.split('\n');

              this.csvHeaders = lines[0].split(',');  // Première ligne = en-têtes
              this.csvData = lines.slice(1).map((line: string) => line.split(';'));  // Autres lignes = données

            };
            reader.readAsArrayBuffer(file);
          }
    }

  }

  exporter(){
    this.showExportMsg = false;
    if(this.type === ''){
      this.showExportMsg = true;
    }
    else {
      if(this.type ==='Entreprises') {
      const headings = [['Designation' , 'Adresse' , 'Telephone']];
      this.titre = 'entreprise_import.csv';
      this.exporterFiles(headings, this.titre);
      }
    }

    if(this.type ==='Personnes') {
      const headings = [['Nom Prenoms', 'Telephone','Adresse', 'Password', 'Poste', 'Niveau Scolaire', 'Matiere']];
      this.titre = 'personne_import.csv';
      this.exporterFiles(headings, this.titre);
    }

    if(this.type ==='Stages') {
      const headings = [['Theme Stage', 'Responsable','contactResponsable', 'dateDebut', 'dateFin', 'Email etudiant', 'Email professeur', 'Designation entreprise']];
      this.titre = 'stage_import.csv';
      this.exporterFiles(headings, this.titre);
    }
  }

  exporterFiles(headings: any, titre: string){
      const wb = utils.book_new();
      const ws: any = utils.json_to_sheet([])
      utils.sheet_add_aoa(ws, headings);
      //utils.sheet_to_json(ws, list, {origin: 'A2', skipHeader: true,});
      utils.book_append_sheet(wb, ws, 'Entreprises');
      writeFile(wb, titre);
  }
}
