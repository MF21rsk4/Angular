import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../demo/service/firebase.service';
import { User } from '../class/user';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase/compat/app';
import {AngularFireDatabase} from '@angular/fire/compat/database';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  user = new User( '' , '');
 

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public afDB: AngularFireDatabase,
              private firebase: FirebaseService) {
   }

  ngOnInit() {
    
    this.firebase.readUserData(this.firebase.userId())
    .then( (userData: User) => { this.user = userData } )
    console.log(this.user);
  }

  userId(){
    return firebase.auth().currentUser.uid;

  }

  home() {
    this.router.navigate(['/home']);
  }

  add() {
    this.afDB.list('Users/tache').push({
      tache: ''
    });
  }

}
