import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDateService, NbComponentStatus } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-policier',
  templateUrl: 'policier.component.html',
  styleUrls: ['policier.component.scss'],
})
export class PolicierComponent implements OnInit {

    presentationForm : FormGroup;
    identiteForm : FormGroup;
    carriereForm: FormGroup;
    distinctionForm: FormGroup;
    statuses: NbComponentStatus[] = ['success'];

    settingsCarriere = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        historique: {
          title: 'Historique',
          type: 'string',
        },
        poste: {
          title: 'Poste',
          type: 'string',
        },
        grade: {
          title: 'Grade',
          type: 'string',
        },
        corps: {
          title: 'Corps',
          type: 'string',
        },
        deprt: {
          title: 'Déprt',
          type: 'string',
        },
        nature: {
          title: 'Nature',
          type: 'string',
        },
      },
    };

    settingsDistinction = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        historique: {
          title: 'Historique',
          type: 'string',
        },
        poste: {
          title: 'Poste',
          type: 'string',
        },
        grade: {
          title: 'Grade',
          type: 'string',
        },
        corps: {
          title: 'Corps',
          type: 'string',
        },
        deprt: {
          title: 'Déprt',
          type: 'string',
        },
        distinction: {
          title: 'Distinction',
          type: 'string',
        },
        motif: {
          title: 'Motif',
          type: 'string',
        },
      },
    };


    sourceCarriere: LocalDataSource = new LocalDataSource();
    sourceDisctinction: LocalDataSource = new LocalDataSource();
    
constructor(private fb: FormBuilder, protected dateService: NbDateService<Date>, private service: SmartTableData) {
  const dataCarriere = this.service.getCarriereData();
  this.sourceCarriere.load(dataCarriere);

  const dataDisctinction = this.service.getDisctinctionData();
  this.sourceDisctinction.load(dataDisctinction);
}
    ngOnInit() {
this.presentationForm = this.fb.group({
    matricule: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    affectation_actuelle: ['', Validators.required],
    specialite: ['', Validators.required],
    departement :['', Validators.required],
    poste :['', Validators.required],
    hierarchie :['', Validators.required],
    nbre_subordonne :['', Validators.required],
});

this.identiteForm = this.fb.group({
    date_naiss: ['', Validators.required],
    lieu_naiss: ['', Validators.required],
    age: ['', Validators.required],
    sexe: ['', Validators.required],
    situ_matri: ['', Validators.required],
    nbr_enfant :['', Validators.required],
    adresse :['', Validators.required]
});

this.carriereForm = this.fb.group({
    grade: ['', Validators.required],
    corps: ['', Validators.required],
    echelon: ['', Validators.required],
    date_entre: ['', Validators.required],
    anciennete: ['', Validators.required],
    date_prise_actuel :['', Validators.required],
    ref_grille_salaire :['', Validators.required],
    ponde_salaire :['', Validators.required],
});

this.distinctionForm = this.fb.group({
    nbr_disctinction: ['', Validators.required],
    honneur: ['', Validators.required],
    avertissement: ['', Validators.required],
    blame: ['', Validators.required]
});
    }

    onPresentationFormSubmit() {
        this.presentationForm.markAsDirty();
      }
    
      onIdentiteFormSubmit() {
        this.identiteForm.markAsDirty();
      }
    
      onCarriereFormSubmit() {
        this.carriereForm.markAsDirty();
      }

      onDistinctionFormSubmit() {
        this.distinctionForm.markAsDirty();
      }
      onDeleteConfirm(event): void {
        if (window.confirm('Etes-vous sûre de Vouloir  Supprimer?')) {
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
      }
}