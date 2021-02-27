import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {SuccessComponent} from './login/success/success.component';


const routes: Routes = [
  {path: 'home', component : HomeComponent },
  {path: 'login', component : LoginComponent },
  {path: 'register', component : RegisterComponent },
  {path: 'success', component: SuccessComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
