import { Component, OnInit } from '@angular/core';
// Import des bibliothèques de formulaire
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // Propriété "Formulaire" de la page
  registerForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    // Initialisation du formulaire
    this.registerForm = this.formBuilder.group({
      pseudo: ['',[Validators.required, Validators.pattern(/^[0-9a-zA-Z]{6,}$/)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern(/^[0-9a-zA-Z]{6,8}$/)]]
    });
  }

  // Action à la soumission du formulaire
  submitRegisterForm() {
    console.log(this.registerForm.value);
  }

}
