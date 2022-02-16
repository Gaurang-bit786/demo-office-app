import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './admin/login/login.component';

import { OrganisationAddComponent } from './organisation/organisation-add/organisation-add.component';
import { OrganisationDetailsComponent } from './organisation/organisation-details/organisation-details.component';


const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'organisation',component:OrganisationAddComponent},
  {path:'organisation/details',component:OrganisationDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
