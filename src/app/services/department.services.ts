import { department } from 'src/model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { CollegeLoginService } from './collegeLogin.services';


@Injectable({providedIn:'root'})

export class DepartmentService{
    private departments:department[] = [];
    private departmentUpdated = new Subject<department[]>();
    numberofDepartments:number;

    collegeId:string;
    get_dept = 'http://localhost:3000/api/department';
    constructor(private http:HttpClient,public collegeLoginService:CollegeLoginService){
        this.collegeId = collegeLoginService.getCollegeId();
    }

    getDepartment(){
        const sendingData = {
            collegeId:this.collegeId
        }
        console.log(this.collegeId)
        this.http.post<{message:string,post}>(this.get_dept,sendingData).subscribe((postData)=>{
            this. departments = postData.post;
            this.departmentUpdated.next([...this.departments])
          }); 
    }

    getDepartmentListstner(){
        return this.departmentUpdated.asObservable();
    }

    addDepartment(recievedData:department){
        this.departments.push(recievedData);
        this.departmentUpdated.next([...this.departments]);
    }
}