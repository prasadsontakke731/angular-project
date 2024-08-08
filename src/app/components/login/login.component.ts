import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import * as AuthActions from '../../store/actions/auth.actions';
import { Router } from '@angular/router';
import { Organization } from "../../../mocks/organization.mock"
import { User, users } from "../../../mocks/user.mock"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';
  errorMessage: string = '';
  passError: string = ""
  emailErr: string = ""

  constructor(private store: Store<AppState>, private router: Router) { }

  login() {
    const user = users.find((u) => u.email === this.emailOrPhone && u.password === this.password)
    if (user) {
      this.router.navigate(['/loginSuccess']);
    }
    if (users.find((item) => (item.email !== this.emailOrPhone && this.emailOrPhone === ""))) {
      this.emailErr = 'Incorrect Email please try again';
    }
    if (users.find((item) => (item.password !== this.password && this.password === ""))) {
      this.passError = 'Incorrect Password please try again';
    }
    else {
      this.errorMessage = 'Invalid Credential';
    }

  }

  signUp() {
    this.router.navigate(['/signup']);
  }
}