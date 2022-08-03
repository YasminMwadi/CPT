import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.css']
})
export class DashboardSettingsComponent implements OnInit {

  user:any;
  constructor( 
  public auth: Auth, 
  private authService: AuthService ,
  private accountService: AccountService,
  private generalService: GeneralService,
  ) {
    
    window.scroll(0,0);   
    }

    ngOnInit(): void {
      const uid=this.auth.currentUser?.uid; 
      console.log(uid);
      this.accountService.getUserProfile().subscribe(res =>{
        console.log(res); 
        this.user=res;
      })
    }

}
