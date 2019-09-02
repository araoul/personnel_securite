import { Observable } from 'rxjs';

// export interface User {
//   name: string;
//   picture: string;

// }

// ajout du model
export const enum Sexe {
  'HOMME',
  'FEMME'

}

export interface User {
          name: string; // à enlever après
          picture: string; // à enlever après
          id?: any;
          matricule?: any;
          login?: string;
          password?: string;
          prenom?: string;
          nom?: string;
          email?: string;
          departement?: string;
          affectation_actuelle?: string;
          specialite?: string;
          poste?: string;
          hierarchie?: string;
          nbre_subordonne?: number;
          date_naiss?: any;
          date_entre?: any;
          sexe?: Sexe;
          lieu_naiss?: any;
          age?: number;
          situ_matri?: any;
          nbr_enfant?: number;
          telephone?: string;
          adresse?: string;
          grade?: string;
          corps?: string;
          echelon?: string;
          anciennete?: string;
          date_prise_actuel?: any;
          ref_grille_salaire?: any;
          ponde_salaire?: any;
          nbr_disctinction?: number;
          honneur?: any;
          avertissement?: any;
          blame?: any;
          activated?: Boolean;   
          authorities?: any[];
          createdBy?: string;
          createdDate?: any;
          lastModifiedBy?: string;
          lastModifiedDate?: any;
}

// Fin ajout du model
export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}
