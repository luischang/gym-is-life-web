import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostPasswordComponent } from './pages/lost-password/lost-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent},
  { path: 'lost-password', component: LostPasswordComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'signup', component: SignupComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
