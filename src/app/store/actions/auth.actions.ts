import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ emailOrPhone: string, password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const signup = createAction('[Auth] Signup', props<{ emailOrPhone: string, name: string, password: string }>());
export const signupSuccess = createAction('[Auth] Signup Success');
export const signupFailure = createAction('[Auth] Signup Failure', props<{ error: string }>());
