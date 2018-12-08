import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';
import { BasicComponent } from './templates/basic/basic.component';
import { Certificate1Component } from './certificate1/certificate1.component';
import { CertComponent } from './cert/cert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    BasicComponent,
    Certificate1Component,
    CertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
