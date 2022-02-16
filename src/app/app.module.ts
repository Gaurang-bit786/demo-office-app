import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { EmployeeComponent } from './employee/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { OrganisationAddComponent } from './organisation/organisation-add/organisation-add.component';
import { OrganisationDetailsComponent } from './organisation/organisation-details/organisation-details.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './admin/login/login.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NgChartsModule } from 'ng2-charts';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { CookieService } from 'ngx-cookie-service';
import {MatDialogModule} from '@angular/material/dialog';
import { SignupComponent } from './admin/signup/signup.component';
import { PasswordChangeComponent } from './admin/password-change/password-change.component';
import { ForgetPasswordComponent } from './admin/forget-password/forget-password.component'
import { EmployeeModule } from './employee/employee.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    OrganisationAddComponent,
    OrganisationDetailsComponent,
    LoginComponent,
    SignupComponent,
    PasswordChangeComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatCheckboxModule,
    NgbModule,
    MatStepperModule,
    NgChartsModule,
    MatBadgeModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    EmployeeModule,
    DashboardModule,
    AdminModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
