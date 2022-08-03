// import { Component, OnInit } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {OnInit,Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms'; 
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Auth } from '@angular/fire/auth';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {  
  // Variables 
  user:any;
  skills:any;
  dashboardPage=true;
  documentPage=true;
  experienceData:any;
  qualificationData:any;
 
  
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
    //getExperiences
    this.accountService.getExperiences().subscribe(res=>{ 
      this.experienceData=res; 
    })
    //getQualification
    this.accountService.getQualification().subscribe(res=>{ 
      this.qualificationData=res;
      console.log(res);
    })
  }
  dashboardView(){

  }
  documentView(){

  } 
}
 
