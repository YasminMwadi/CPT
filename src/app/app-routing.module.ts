import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Account/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './Subscriptions/sigin/sigin.component';
import { SigupComponent } from './Subscriptions/sigup/sigup.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HeaderUserComponent } from './inc/header-user/header-user.component';
import { ProfileEditComponent } from './Account/profile-edit/profile-edit.component';
import { IndexComponent } from './Account/index/index.component';
import { JobsComponent } from './Jobs/jobs/jobs.component';
import { DashboardDocumentComponent } from './Account/dashboard-document/dashboard-document.component';
import { DashboardSavedJobsComponent } from './Account/dashboard-saved-jobs/dashboard-saved-jobs.component';
import { DashboardAppliedJobsComponent } from './Account/dashboard-applied-jobs/dashboard-applied-jobs.component';
import { DashboardSettingsComponent } from './Account/dashboard-settings/dashboard-settings.component';

const redirectLoggedInToHome =() =>redirectLoggedInTo(['dashboard']); 
const redirectUnauthorizedToLogin=() =>redirectUnauthorizedTo(['']); 
const routes: Routes = [
  // { path: '', component:HomeComponent  },
  { path: '', component:IndexComponent}, 
  { path: 'index', component:IndexComponent, ...canActivate(redirectUnauthorizedToLogin) }, 
  { path: 'signin', component:SiginComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'signup', component:SigupComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'dashboard', component:DashboardComponent, ...canActivate(redirectUnauthorizedToLogin) }, 
  // { path: 'index', component:IndexComponent, ...canActivate(redirectUnauthorizedToLogin) }, 
  { path: 'edit-profile', component:ProfileEditComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'jobs', component:JobsComponent, ...canActivate(redirectUnauthorizedToLogin)  },
  { path: 'jobs-public', component:JobsComponent  },
  { path: 'dashboard-documents', component:DashboardDocumentComponent, ...canActivate(redirectUnauthorizedToLogin)  },
  { path: 'dashboard-savedjobs', component:DashboardSavedJobsComponent , ...canActivate(redirectUnauthorizedToLogin)  },
  { path: 'dashboard-appliedjobs', component:DashboardAppliedJobsComponent , ...canActivate(redirectUnauthorizedToLogin)  },
  { path: 'dashboard-settings', component:DashboardSettingsComponent , ...canActivate(redirectUnauthorizedToLogin)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
