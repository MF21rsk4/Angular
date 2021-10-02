import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from '../demo/service/firebase.service';
import { User } from '../class/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  user: User;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private firebase: FirebaseService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      pseudo:['',[
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]{6}$/)]],
      
      email:['',[
        Validators.required,
        Validators.email]],
     
      password:['',[
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[0-9a-zA-Z]{6,8}$/)]]
      });
  }

  submitRegisterForm() {
    this.firebase.register(this.registerForm.value.email, this.registerForm.value.password)

    .then( (res: any) => { 
      
      this.user =
         new User(
           this.registerForm.value.pseudo,
           this.registerForm.value.email );
      this.firebase.writeUserData(res.user.uid, this.user);

      this.router.navigate(['/list']); })

    .catch((error) => {} );
}

  home() {
    this.router.navigate(['/home']);
  }
}
