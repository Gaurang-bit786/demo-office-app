import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


const routes:Routes = [
  {path:'signup',component:SignupComponent},
  {path:'change-password',component:PasswordChangeComponent},
  {path:'forget-password/:id',component:ForgetPasswordComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AdminModule { }
