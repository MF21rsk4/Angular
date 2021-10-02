import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from '../demo/service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  loginForm: FormGroup;

  constructor(private router: Router, 
    private formBuilder: FormBuilder,
    private firebase: FirebaseService ) { }

  ngOnInit() {

    
    this.loginForm = this.formBuilder.group({
      email:['',[
        Validators.required,
        Validators.email]],
     
      password:['',[
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[0-9a-zA-Z]{6,8}$/)]]
      });
  }

  submitLoginForm() {
    this.firebase.login(this.loginForm.value.email, this.loginForm.value.password)
    .then( (res) => { this.router.navigate(['/list']) })

    .catch((error) => {} );
}



  home() {
    this.router.navigate(['/home']);
  }
}
