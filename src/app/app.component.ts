import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'cpt-firestore';
  isLogged:any;
  
  constructor( public auth: Auth) { 
    if(this.auth.currentUser?.uid){
      this.isLogged=true;
    }  
    else{
      this.isLogged=false;
    }
    console.log("app", this.auth.currentUser);
  }


}
