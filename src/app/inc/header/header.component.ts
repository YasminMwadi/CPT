import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth'; 
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged=false;
  user:any;

  constructor( 
    public auth: Auth, 
    private authService: AuthService,
    private router: Router,
    private accountService: AccountService,
   ) { }

   ngOnInit(): void {  
  } 
  
  signout(){  
    this.authService.signout().then( (res:any)=>{ 
      console.log(res); 
    this.router.navigate(['/']); 
    });
  } 
}