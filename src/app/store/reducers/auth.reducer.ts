import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    error: null
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { token }) => ({
        ...state,
        isAuthenticated: true,
        token,
        error: null
    })),
    on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        isAuthenticated: false,
        token: null,
        error
    })),
    on(AuthActions.signupSuccess, state => ({
        ...state,
        isAuthenticated: true,
        error: null
    })),
    on(AuthActions.signupFailure, (state, { error }) => ({
        ...state,
        isAuthenticated: false,
        error
    }))
);
