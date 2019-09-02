/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NbPasswordAuthStrategy, NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
      //   NbPasswordAuthStrategy.setup({
      //     name: 'email',

      //     baseEndpoint: '',
      //      login: {
      //        // ...
      //        redirect: {
      //         success: '/dashboard/',
      //         failure: null, // stay on the same page
      //       },
      //       // endpoint: '/api/auth/login',
      //      },
      //      register: {
      //        // ...
      //        redirect: {
      //         success: '/welcome/',
      //         failure: null, // stay on the same page
      //       },
      //       // endpoint: '/api/auth/register',
      //      },
      //   }),
      // ],
        NbDummyAuthStrategy.setup({
          name: 'email',
          delay: 3000,
          //      login: {
      //        // ...
      //        redirect: {
      //         success: '/dashboard/',
      //         failure: null, // stay on the same page
      //       },
      //       // endpoint: '/api/auth/login',
      //      },
      //      register: {
      //        // ...
      //        redirect: {
      //         success: '/welcome/',
      //         failure: null, // stay on the same page
      //       },
      //       // endpoint: '/api/auth/register',
      //      },
        }),
      ],
      forms: {
        login: formSetting,
           register: formSetting,
           requestPassword: formSetting,
           resetPassword: formSetting,
           logout: {
             redirectDelay: 0,
           },
      },
    }), 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
