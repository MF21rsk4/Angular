import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Router } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  constructor(private router: Router,
    public afDB: AngularFireDatabase,
    
  ) {}


  login() {
    this.router.navigate(['/login']);
  }
  
  register() {
    this.router.navigate(['/register']);
  }

  


}
