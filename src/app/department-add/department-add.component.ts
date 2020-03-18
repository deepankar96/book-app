import { Component, OnInit, OnDestroy } from '@angular/core';
import { department, college } from 'src/model';
import { DepartmentService } from '../services/department.services';
import {CollegeService} from '../services/college.services';
import { NgForm } from '@angular/forms';
import { from, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { CollegeLoginService } from '../services/collegeLogin.services';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit,OnDestroy {
  deptid=0;
  // colleges:college[] = [];
  private collegeSub:Subscription;
  isLoading:boolean = true;
  collegeId:string;


  url_post="http://localhost:3000/api/adddept";
  constructor(public DepartmentServices:DepartmentService,
    private http:HttpClient,
    private router:Router,
    public collegeLoginService:CollegeLoginService) { 
  }

  ngOnInit(): void {
    this.collegeId = this.collegeLoginService.getCollegeId()
    // this.CollegeService.getCollege();
    // this.collegeSub = this.CollegeService.getCollegeListstner().subscribe(
    //   (collegeFromDatabase:college[])=>{
    //     this.colleges = collegeFromDatabase;
    //     this.isLoading=true;
    //     console.log(this.colleges)
    //   }
    // );
  }


  onNewDepartment(postForm:NgForm){
    console.log(postForm.value)
    if (postForm.invalid){
      return
    }
    const sendingData:department = {
      id:this.deptid,
      collegeid:this.collegeId,
      departmentid:postForm.value.departmentid,
      departmentname:postForm.value.departmentname,
      hodid:postForm.value.hodid,
      departmentemail:postForm.value.departmentemail,
      departmentpassword:postForm.value.departmentpassword,
    }
    console.log(sendingData)
    this.http.post<{message:string}>(this.url_post,sendingData).subscribe((responseData)=>{
      if(responseData.message == "success"){
        this.DepartmentServices.addDepartment(sendingData);
        this.router.navigate(['department'])
      }
    })
  }
  
  ngOnDestroy():void{
    // this.collegeSub.unsubscribe();
  }

}
