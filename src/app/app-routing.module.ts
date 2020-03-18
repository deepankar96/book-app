import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContributorLoginComponent } from './contributor-login/contributor-login.component';


const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"contributorLogin",component:ContributorLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
