import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MasterHomePageComponent } from './master-home-page/master-home-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { ContributorLoginComponent } from './contributor-login/contributor-login.component';
import { ContributorHomepageComponent } from './contributor-homepage/contributor-homepage.component';
import { BookDisplayPageComponent } from './book-display-page/book-display-page.component';
import { BookContentEditPageComponent } from './book-content-edit-page/book-content-edit-page.component';
import { BookContentDisplayPageComponent } from './book-content-display-page/book-content-display-page.component';
import { UserSignupPageComponent } from './user-signup-page/user-signup-page.component';
import { SuperAdminLoginPageComponent } from './super-admin-login-page/super-admin-login-page.component';
import { SuperAdminPageComponent } from './super-admin-page/super-admin-page.component';
import { BookDisplaySuperAdminComponent } from './book-display-super-admin/book-display-super-admin.component';
import { UserReadingHistoryPageComponent } from './user-reading-history-page/user-reading-history-page.component';
import { SuperAdminUserHistoryPageComponent } from './super-admin-user-history-page/super-admin-user-history-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SuperAdminLanguagesComponent } from './super-admin-languages/super-admin-languages.component';
import { AddGenreSuperadminComponent } from './add-genre-superadmin/add-genre-superadmin.component';


const routes: Routes = [
  {path:'', component:MasterHomePageComponent},
  {path:'userLogin', component:UserLoginPageComponent},
  {path:'userSignUp', component:UserSignupPageComponent},
  {path:'contributorLogin', component:ContributorLoginComponent},
  {path:'contributorHomepage', component:ContributorHomepageComponent},
  {path:'userLogin', component:UserLoginPageComponent},
  {path:'bookDisplay', component:BookDisplayPageComponent},
  {path:'contributorBookDisplay', component:BookContentEditPageComponent},
  {path:'userBookDisplay', component:BookContentDisplayPageComponent},
  {path:'superAdminLogin', component:SuperAdminLoginPageComponent},
  {path:'superAdminPage', component:SuperAdminPageComponent},
  {path:'superAdminBook', component:BookDisplaySuperAdminComponent},
  {path:'userReadingHistory', component:UserReadingHistoryPageComponent},
  {path:'superAdminReadingHistory', component:SuperAdminUserHistoryPageComponent},
  {path:'landingPage', component:LandingPageComponent},
  {path:'superAdminLanguage', component:SuperAdminLanguagesComponent},
  {path:'superAdminGenre', component:AddGenreSuperadminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
