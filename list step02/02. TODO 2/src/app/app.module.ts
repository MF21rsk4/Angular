import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// MODULES FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// FORMULAIRES
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// SERVICE
import { FirebaseService } from './service/firebase.service';

export const firebaseConfig = {
    apiKey: "AIzaSyB2M8PpjKS8VTRS1KWmwsz1YkgT_ZtfzVw",
    authDomain: "todo3-83ec4.firebaseapp.com",
    databaseURL: "https://todo3-83ec4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo3-83ec4",
    storageBucket: "todo3-83ec4.appspot.com",
    messagingSenderId: "952262960166",
    appId: "1:952262960166:web:75ab295c6ef7dafb5a72e7"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
              FormsModule,
              ReactiveFormsModule,
              AngularFireModule.initializeApp(firebaseConfig),
              AngularFireDatabaseModule,
              AngularFireAuthModule ],
  providers: [FirebaseService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
