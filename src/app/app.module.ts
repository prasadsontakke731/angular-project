import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Step2Component } from './components/step2/step2.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './store/reducers/auth.reducer';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthService } from './services/auth.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        Step2Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        StoreModule.forRoot({ auth: authReducer }),
        EffectsModule.forRoot([AuthEffects])
    ],
    providers: [AuthService, provideAnimationsAsync()],
    bootstrap: [AppComponent]
})
export class AppModule { }