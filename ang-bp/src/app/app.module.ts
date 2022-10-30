import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { InfoSecPolicyComponent } from './shared/components/info-sec-policy/info-sec-policy.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, CreateNewUserComponent, PrivacyPolicyComponent, InfoSecPolicyComponent,],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
