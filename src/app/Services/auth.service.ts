import { Injectable } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    public auth: Auth
    ) { }

    signout(){
      return this.auth.signOut();
    }
}
