import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CollegeLoginPageComponent } from './college-login-page/college-login-page.component';
import { AddCollegeComponent } from './add-college/add-college.component';
import { DepartmentHomepageComponent } from './department-homepage/department-homepage.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'department',component: DepartmentListComponent},
  {path:'addDepartment', component:DepartmentAddComponent},
  {path:'collegeLogin', component:CollegeLoginPageComponent},
  {path:'addCollege', component:AddCollegeComponent},
  {path:'departmentHomepage', component:DepartmentHomepageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
