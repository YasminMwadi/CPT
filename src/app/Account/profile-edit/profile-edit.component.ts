import { Component, OnInit } from '@angular/core'; 
import { Auth } from '@angular/fire/auth';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  // Forms
  regForm:any;  
  qualificationForm:any;
  experienceForm:any;

  //variables
  qualificationData:any;
  experienceData:any;
  user:any;
  languages:any;
  locations:any;
  gender:any;
  qualifications:any;
  experience=false;
  qualification=false;
  isUpdate=true;
  constructor(
    public formBuilder: FormBuilder, 
    public router: Router, 
    public authService: AuthService,
    private accountService: AccountService,
    private generalService: GeneralService,
    private auth: Auth
    ) {  
        
  }  
  async ngOnInit() {
    //Qualification form 
    this.qualificationForm = new FormGroup({
      level:new FormControl('',[
        Validators.required, 
        Validators.minLength(2)
      ]),
      name:new FormControl('',[
        Validators.required, 
        Validators.minLength(2)
      ]),
      date:new FormControl('',[ ]), 
    });
    this.accountService.getQualification().subscribe(res=>{ 
      this.qualificationData=res;
    })
    //End qualification form

    
    //Experiences form 
    this.experienceForm = new FormGroup({
      title:new FormControl('',[
        Validators.required, 
        Validators.minLength(2)
      ]),
      companyname:new FormControl('',[
        Validators.required, 
        Validators.minLength(2)
      ]),
      skills:new FormControl('',[ ]), 
      startDate:new FormControl('',[ ]), 
      endDate:new FormControl('',[ ]), 
    });
    this.accountService.getExperiences().subscribe(res=>{ 
      this.experienceData=res;
    })
    //End Experiences form

    const uid=this.auth.currentUser?.uid;  
    await this.accountService.getUserProfile().subscribe(res =>{ 
      this.user=res; 
      this.regForm = new FormGroup({
        firstname:new FormControl(this.user.firstname,[
          Validators.required, 
          Validators.minLength(2)
        ]),
        lastname:new FormControl(this.user.lastname,[
          Validators.required, 
          Validators.minLength(2)
        ]),
        phone:new FormControl(this.user.phone,[
          Validators.required
        ]),
        location:new FormControl(this.user.location,[]),
        idnum:new FormControl(this.user.idnum,[]),
        gender:new FormControl(this.user.gender,[
          Validators.required
        ]),
        dob:new FormControl(this.user.dob,[]),
        language:new FormControl(this.user.language,[]),
        id:new FormControl(this.user.id,[]),
        date:new FormControl('',[]),

        email:new FormControl(this.user.email,[
          Validators.required,  
          Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
        ]),
      });
    });
    //langauges
    await this.generalService.getLanguages().subscribe(res =>{
      this.languages=res;
    });
    
    //genders
    await this.generalService.getGender().subscribe(res =>{
      this.gender=res;
    });
    //locations
    await this.generalService.getLocation().subscribe(res =>{
      this.locations=res;
    });
    
    //qualifications
    await this.generalService.getQualifications().subscribe(res =>{
      this.qualifications=res;
    });
  } 

  //Pop up for experience
  popExperience(){
    this.experience=true; 
    this.isUpdate=false; 
    window.scroll(0,0);
  }
  addExperience(){
    this.experience=false; 
    this.isUpdate=true;  
  }
  closeExperience(){
    this.accountService.addExperiences(this.experienceForm.value).then(res=>{
      console.log(res);
    });
    this.experience=false; 
    this.isUpdate=true;  
  }

  //Pop up Qualification
  popQualification(){
    this.qualification=true;  
    this.isUpdate=false; 
    window.scroll(0,0);
    
  }
  addQualification(){ 
    this.qualification=false; 
    this.isUpdate=true;  
  } 
  closeQualification(){ 
    this.accountService.addQualification(this.qualificationForm.value).then(res=>{
      console.log(res);
    });
    this.qualification=false;
    this.isUpdate=true;     
  }

  //Update user details
  async onSubmit()
  { 
    await this.accountService.updateProfile(this.regForm.value)
    .then(res =>{
      alert("Successfully updated");
      this.router.navigate(["dashboard"]);
    })
    .catch((err)=>{
      alert(err.message);
    })
  }

  //browse back
  browseBack(){
    this.router.navigate(['/dashboard']);
  }
}
