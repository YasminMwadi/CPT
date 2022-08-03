import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service'; 
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit { 

  user:any;
  locations:any;
  skills:any;

  constructor( 
    public auth: Auth, 
    private authService: AuthService ,
    private accountService: AccountService,
    private generalService: GeneralService,
    private route:Router
    ) { }
 
  async ngOnInit() {
    const uid=this.auth.currentUser?.uid;  
    await this.accountService.getUserProfile().subscribe(res =>{ 
      this.user=res;
    })

    //Locations 
    await this.generalService.getLocation().subscribe(res =>{  
      this.locations=res;
    })

    
    //Skills 
    await this.generalService.getSkills().subscribe(res =>{  
      this.skills=res;
    })
  }
  findJobs(){ 
    const uid=this.auth.currentUser?.uid;  
    if(uid){
      this.route.navigate(["/jobs"])
    }
    else{ 
      this.route.navigate(["/jobs-public"])
    }
  }
  uploadCV(){
    const uid=this.auth.currentUser?.uid;  
    if(uid){
      this.route.navigate(["/dashboard-documents"])
    }
    else{ 
      this.route.navigate(["/signin"])
    }
  }
}
