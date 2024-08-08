import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            mergeMap(action =>
                this.authService.validatePassword(action.emailOrPhone, action.password).pipe(
                    map(isValid => isValid ? AuthActions.loginSuccess({ token: 'fake-jwt-token' }) : AuthActions.loginFailure({ error: 'Invalid credentials' })),
                    catchError(error => of(AuthActions.loginFailure({ error })))
                )
            )
        )
    );

    signup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.signup),
            mergeMap(action =>
                this.authService.validateUser(action.emailOrPhone).pipe(
                    map(userExists => userExists ? AuthActions.signupFailure({ error: 'User already exists' }) : AuthActions.signupSuccess()),
                    catchError(error => of(AuthActions.signupFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }
}