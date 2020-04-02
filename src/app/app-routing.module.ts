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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
