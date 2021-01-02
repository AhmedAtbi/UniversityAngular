import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";

import { UniversityAddComponent } from './components/university-add/university-add.component';
import { UniversityListComponent } from './components/university-list/university-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EspritComponent } from './components/esprit/esprit.component';
import { UnicentralComponent } from './components/unicentral/unicentral.component';
import { ItbsComponent } from './components/itbs/itbs.component';
import { UnilibreComponent } from './components/unilibre/unilibre.component';
import { ContactComponent } from './components/contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    Page404Component,
    SidebarComponent,
    TopbarComponent,
    UniversityAddComponent,
    UniversityListComponent,
    UserListComponent,
    EspritComponent,
    UnicentralComponent,
    ItbsComponent,
    UnilibreComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
