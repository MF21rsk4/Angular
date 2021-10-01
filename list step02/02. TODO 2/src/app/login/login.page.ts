import { Component, OnInit } from '@angular/core';
// Import des bibliothèques de formulaire
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Propriété "Formulaire" de la page
  loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
                 private router: Router,
                 private afAuth: AngularFireAuth ) { }

  ngOnInit() {
    // Initialisation du formulaire
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern(/^[0-9a-zA-Z]{6,8}$/)]]
    });
  }


  // Action à la soumission du formulaire
  submitLoginForm() {
    // Méthode asynchrone pour interroger la BDD (promise)
    this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
        // Retour "positif" de la BDD
       .then( (res) => { this.router.navigate(['/list']) } )
       // Retour "négatif" de la BDD
       .catch( (err) => { console.log(err) } );

  }


}
