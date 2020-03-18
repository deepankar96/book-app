import { college } from 'src/model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn:'root'})

export class CollegeService{
    private college:college[] = []
    private collegeUpdated = new Subject<college[]>();
    numberofCollege:number;
    get_dept = 'http://localhost:3000/api/college';
    constructor(private http:HttpClient){

    }

    getCollege(){
        this.http.get<{message:string,post}>(this.get_dept).subscribe((postData)=>{
            this. college = postData.post;
            this.collegeUpdated.next([...this.college])
          }); 
    }

    getCollegeListstner(){
        return this.collegeUpdated.asObservable();
    }

    addCollege(recievedData:college){
        this.college.push(recievedData);
        this.collegeUpdated.next([...this.college]);
    }
}