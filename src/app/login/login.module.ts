import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatCardModule, MatButtonModule, MatTabsModule } from '@angular/material';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
  ],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  exports: [ RouterModule ]
})
export class LoginModule { }
