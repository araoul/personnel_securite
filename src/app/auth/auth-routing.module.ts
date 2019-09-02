import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';

import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
export const routes: Routes = [
  // .. here goes our components routes
  {
    path: '',
    component: NbAuthComponent,  // <---
    children: [
        {
          path: 'login',
          component: NgxLoginComponent, // <---
        },
        {
            path: 'register',
            component: NgxRegisterComponent, // <---
          },
          {                                 // ajout pour rediriger l'auth à login
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
          }
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}