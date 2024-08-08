import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import * as AuthActions from '../../store/actions/auth.actions';
import { users } from 'src/mocks/user.mock';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  emailOrPhone: string = '';
  name: string = '';
  password: string = '';
  errorMessage: string = '';
  emailError: string = "";
  nameError: string = ""
  passError: string = ""

  constructor(private store: Store<AppState>, private router: Router) { }

  continue() {
    // this.store.dispatch(AuthActions.signup({ emailOrPhone: this.emailOrPhone, name: this.name, password: this.password }));
    // this.store.select(state => state.auth.error).subscribe(error => {
    //   if (!error) {
    //     this.router.navigate(['/step2']);
    //   } else {
    //     this.errorMessage = 'User already exists';
    //   }
    // });
    const user = users.find((u) => (u.email === this.emailOrPhone && u.password === this.password && u.name === this.name))

    if (user) {
      this.router.navigate(['/step2']);
    }

    if (users.find((item) => (item.email !== this.emailOrPhone && this.emailOrPhone === ""))) {
      this.emailError = 'Incorrect Email please try again';
    }
    if (users.find((item) => (item.password !== this.password && this.password === ""))) {
      this.passError = 'Incorrect Password please try again';
    }
    if (users.find((item) => (item.name !== this.name && this.name === ""))) {
      this.nameError = 'Incorrect Name please try again';
    }
    // else {

    //   this.errorMessage = 'Invalid Credential';
    // }

  }

  // }
}