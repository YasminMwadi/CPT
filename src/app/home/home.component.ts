import { Component, OnInit } from '@angular/core'; 
import { Auth } from '@angular/fire/auth';

import { Router } from '@angular/router';
import { AccountService } from '../Services/account.service'; 
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  user:any;
  constructor( 
    public auth: Auth, 
    private authService: AuthService ,
    private accountService: AccountService,
    ) { }
 
  async ngOnInit() { 
  }

}
