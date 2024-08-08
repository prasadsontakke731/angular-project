import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isAuthenticated = createSelector(
    selectAuthState,
    (state: AuthState) => state.isAuthenticated
);

export const authToken = createSelector(
    selectAuthState,
    (state: AuthState) => state.token
);

export const authError = createSelector(
    selectAuthState,
    (state: AuthState) => state.error
);
