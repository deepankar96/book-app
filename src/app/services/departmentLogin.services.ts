import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({providedIn:'root'})

export class DepartmentLoginService{

    private token:string;
    private collegeId:string;
    private departmentId:string;

    constructor(private router:Router){

    }

    loginToDepartment(token:string,departmentId:string,collegeId:string){
        this.token = token;
        this.collegeId = collegeId;
        this.departmentId = departmentId;
        this.saveToken()
    }

    getCollegeId(){
        const currentTimeInDate = new Date()
        var currentTime = currentTimeInDate.getTime()
        var expireTime = parseInt(localStorage.getItem("expiresIn"))
        if(expireTime>=currentTime){
        this.collegeId = localStorage.getItem("collegeId")
        return this.collegeId
        }
    }
    getDepartmentId(){
        const currentTimeInDate = new Date()
        var currentTime = currentTimeInDate.getTime()
        var expireTime = parseInt(localStorage.getItem("expiresIn"))
        if(expireTime>=currentTime){
        this.departmentId = localStorage.getItem("departmentId")
        return this.departmentId
        }
    }

    logout(){
        this.token = null
        this.collegeId = null
        this.departmentId = null
        this.removeToken()
        this.router.navigate(['collegeLogin'])
    }

    private saveToken(){
        localStorage.setItem("token",this.token);
        localStorage.setItem("collegeId",this.collegeId);
        localStorage.setItem("departmentId",this.departmentId);
        const expireTime = new Date()
        const expire = (expireTime.getTime() + 43200000).toString();
        localStorage.setItem("expiresIn",expire)
        }
    private removeToken(){
        localStorage.removeItem("token")
        localStorage.removeItem("collegeId")
        localStorage.removeItem("departmentId")
        localStorage.removeItem("expiresIn")
    }

}