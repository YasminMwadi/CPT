import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
 

  public loginForm: FormGroup; 
  constructor(
    public formBuilder: FormBuilder, 
    public router: Router, 
    private firestore: Firestore,
    public auth: Auth, ) { 
      
      this.loginForm= this.formBuilder.group( {
    
        email: [''],
        password: [''],
    })
  }
  
  onSubmit (){
    
    const email= this.loginForm.value.email;
    const password= this.loginForm.value.password;  
    
     signInWithEmailAndPassword(this.auth, email, password).then((res:any )=>{
      console.log(res.user);
      const uid=this.auth.currentUser?.uid;  
      this.router.navigate(['dashboard']); 
     })
  }
  ngOnInit(): void {
  }

}
