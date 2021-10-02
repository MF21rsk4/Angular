import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../../class/user';

//import depuis Google
import firebase from 'firebase/compat/app';
import { promise } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  

  constructor(private afAuth: AngularFireAuth,
              ) { }

  login(email: string, password: string) {

    return new Promise ( (resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email,password)
      .then( (res: any) => { resolve(res) })
      .catch((error: any) => { reject(error) });
    });
  }

  register(email: string, password: string) {

    return new Promise ( (resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email,password)
      .then( (res: any) => { resolve(res) })
      .catch((error: any) => { reject(error) });
    });
  }

  writeUserData(userId: string, user: User) {
    firebase.database().ref('users/' + userId).set(user);
  }

  readUserData(userId: string) {

    return new Promise( (reponse) => {
    firebase.database().ref('/users/' + userId).once('value')
    .then((snapshot) =>
     { (snapshot.val()) })
  });
}

  //recupérer le pseudo
  userId() {
    return firebase.auth().currentUser.uid;

  }

}
