import { Component, OnInit } from '@angular/core';
import { DepartmentLoginService } from '../services/departmentLogin.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-homepage',
  templateUrl: './department-homepage.component.html',
  styleUrls: ['./department-homepage.component.css']
})
export class DepartmentHomepageComponent implements OnInit {
  departmentId:string;
  collegeId:string;
  constructor(public departmentLoginService:DepartmentLoginService,private router:Router) { }

  ngOnInit(): void {
    if(this.departmentLoginService.getDepartmentId()==null){
      this.router.navigate(['collegeLogin'])
    }
    this.collegeId = this.departmentLoginService.getCollegeId()
    this.departmentId = this.departmentLoginService.getDepartmentId()
  }

  logout(){
    this.departmentLoginService.logout();
  }

}
