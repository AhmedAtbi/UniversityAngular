import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EspritComponent } from './components/esprit/esprit.component';
import { HomeComponent } from './components/home/home.component';
import { ItbsComponent } from './components/itbs/itbs.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';
import { UnicentralComponent } from './components/unicentral/unicentral.component';
import { UnilibreComponent } from './components/unilibre/unilibre.component';
import { UniversityAddComponent } from './components/university-add/university-add.component';
import { UniversityListComponent } from './components/university-list/university-list.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },


  {
    path: "itbs",
    component: ItbsComponent
  },
  {
    path: "esprit",
    component: EspritComponent
  },
  {
    path: "unicentral",
    component: UnicentralComponent
  },
  {
    path: "unilibre",
    component: UnilibreComponent
  },

  {
    path: "university-add",
    component: UniversityAddComponent
  },
  {
    path: "university-list",
    component: UniversityListComponent
  },
  

  {
    path: "user-list",
    component: UserListComponent
  },
 

  //404
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
