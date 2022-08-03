import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  user:any;
  locations:any;
  constructor( 
    public auth: Auth, 
    private authService: AuthService ,
    private accountService: AccountService,
    private generalService: GeneralService,
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
  }
}
