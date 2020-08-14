import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var config = {
    apiKey: "AIzaSyAgptz5_kEJFtsrOVrP1Nn_le3ueB0N2KE",
    authDomain: "userauthorization-5aeb8.firebaseapp.com",
    databaseURL: "https://userauthorization-5aeb8.firebaseio.com",
    projectId: "userauthorization-5aeb8",
    storageBucket: "userauthorization-5aeb8.appspot.com",
    messagingSenderId: "416574200459"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    LoginModule,
    DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
