import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-header-user-search',
  templateUrl: './header-user-search.component.html', 
  styleUrls: ['./header-user-search.component.css'],
})
export class HeaderUserSearchComponent implements OnInit {

  isLogged:any;
  user:any;
  locations:any;
  skills:any;
 
  constructor( 
    public auth: Auth, 
    private authService: AuthService,
    private router: Router,
    private accountService: AccountService,
    private generalService: GeneralService,
   ) { } 

  async ngOnInit() { 
    const uid=this.auth.currentUser?.uid;  
    await this.accountService.getUserProfile().subscribe(res =>{ 
      this.user=res;
    })
    
    //locations
    await this.generalService.getLocation().subscribe(res =>{
      this.locations=res; 
    });
    //skills
    await this.generalService.getSkills().subscribe(res =>{
      this.skills=res;
    });

  }
  findJobs(){
    const uid=this.auth.currentUser?.uid;
    if(uid){
      this.router.navigate(['/jobs'])
    }
    else{ 
      this.router.navigate(['/jobs-public'])
    }
  }
}