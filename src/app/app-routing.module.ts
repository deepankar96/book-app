import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CollegeLoginPageComponent } from './college-login-page/college-login-page.component';
import { AddCollegeComponent } from './add-college/add-college.component';
import { DepartmentHomepageComponent } from './department-homepage/department-homepage.component';
import { MasterHomePageComponent } from './master-home-page/master-home-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { ContributorLoginComponent } from './contributor-login/contributor-login.component';
import { ContributorHomepageComponent } from './contributor-homepage/contributor-homepage.component';


const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'department',component: DepartmentListComponent},
  {path:'addDepartment', component:DepartmentAddComponent},
  {path:'collegeLogin', component:CollegeLoginPageComponent},
  {path:'addCollege', component:AddCollegeComponent},
  {path:'departmentHomepage', component:DepartmentHomepageComponent},
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
