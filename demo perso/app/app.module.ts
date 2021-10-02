import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { FirebaseService } from './demo/service/firebase.service';



export class HomePageModule {}

export const firebaseConfig = {
  apiKey: "AIzaSyCsaDfV7SIPvNqj_ckuKD5J9WdejUdtGYQ",

  authDomain: "test01-f9879.firebaseapp.com",

  databaseURL: "https://test01-f9879-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "test01-f9879",

  storageBucket: "test01-f9879.appspot.com",

  messagingSenderId: "265647861278",

  appId: "1:265647861278:web:b8f8ba4ccc8397cf5b480f",

  measurementId: "G-HL8376LFE3"

};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [ FirebaseService, {  provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
