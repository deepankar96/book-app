import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MasterHomePageComponent } from './master-home-page/master-home-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { ContributorLoginComponent } from './contributor-login/contributor-login.component';
import { ContributorHomepageComponent } from './contributor-homepage/contributor-homepage.component';


const routes: Routes = [
  {path:'', component:MasterHomePageComponent},
  {path:'userLogin', component:UserLoginPageComponent},
  {path:'contributorLogin', component:ContributorLoginComponent},
  {path:'contributorHomepage', component:ContributorHomepageComponent},
  {path:'userLogin', component:UserLoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
