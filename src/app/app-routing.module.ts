import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Step2Component } from './components/step2/step2.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { SignupSuccessComponent } from './components/signup-success/signup-success.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'step2', component: Step2Component },
    { path: 'loginSuccess', component: LoginSuccessComponent },
    { path: 'signupSuccess', component: SignupSuccessComponent },
    { path: '**', redirectTo: '' } // Redirect to login if the route doesn't match
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }