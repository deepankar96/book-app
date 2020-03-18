import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DepartmentLoginService } from '../services/departmentLogin.services';

@Component({
  selector: 'app-department-login-page',
  templateUrl: './department-login-page.component.html',
  styleUrls: ['./department-login-page.component.css']
})
export class DepartmentLoginPageComponent implements OnInit {

  url =  'http://localhost:3000/api/departmentLogin';

  constructor(private http:HttpClient,private router:Router,public departmentLoginService:DepartmentLoginService) { }

  ngOnInit(): void {
  }

  loginToDepartment(postform:NgForm){
    this.http.post<{message:string,token:string,collegeId:string,departmentId:string}>(this.url,postform.value).subscribe(
      (responseData)=>{
        if(responseData.message == 'success'){
          this.departmentLoginService.loginToDepartment(responseData.token,responseData.departmentId,responseData.collegeId)
          this.router.navigate(['departmentHomepage'])
        }
      }
    );
  }
}
