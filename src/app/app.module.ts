import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './Subscriptions/sigin/sigin.component';
import { SigupComponent } from './Subscriptions/sigup/sigup.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { DashboardComponent } from './Account/dashboard/dashboard.component';
import { HeaderUserComponent } from './inc/header-user/header-user.component';
import { HeaderUserSearchComponent } from './inc/header-user-search/header-user-search.component';
import { ProfileEditComponent } from './Account/profile-edit/profile-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './Account/index/index.component';
import { JobsComponent } from './Jobs/jobs/jobs.component';  
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MaterialExampleModule } from './inc/material.module';
import { ExperienceComponent } from './Account/experience/experience.component'; 
import { DashboardDocumentComponent } from './Account/dashboard-document/dashboard-document.component';
import { DashboardSavedJobsComponent } from './Account/dashboard-saved-jobs/dashboard-saved-jobs.component';
import { DashboardAppliedJobsComponent } from './Account/dashboard-applied-jobs/dashboard-applied-jobs.component';
import { DashboardSettingsComponent } from './Account/dashboard-settings/dashboard-settings.component'; 
import { DashboardChangeImageComponent } from './Account/dashboard-change-image/dashboard-change-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiginComponent,
    SigupComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HeaderUserComponent,  
    HeaderUserSearchComponent,
    ProfileEditComponent,
    IndexComponent,
    JobsComponent,
    ExperienceComponent,  
    DashboardDocumentComponent, DashboardSavedJobsComponent, DashboardAppliedJobsComponent, DashboardSettingsComponent, DashboardChangeImageComponent 
  ],
  imports: [
    BrowserModule, 
    MatChipsModule,
    HttpClientModule,
    MaterialExampleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
