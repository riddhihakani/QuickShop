import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

     { path : '' , component : HomeComponent },
     { path  : 'admin' , loadChildren : 'app/admin/admin.module#AdminModule' },
     { path : 'LoginForm', component : LoginFormComponent },
     { path : 'RegisterationForm', component : RegisterFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
