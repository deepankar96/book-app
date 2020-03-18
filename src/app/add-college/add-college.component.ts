import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  collegeId:string;
  url:string = "http://localhost:3000/api/addCollege"

  constructor(private http:HttpClient,private router:Router) {
    
   }

  ngOnInit(): void {
  }

  generateCollegeId(collegeName:string,collegeState:string,collegeType:string,collegeCity:string){
    const currentTime = new Date()
    const year = currentTime.getFullYear()
    this.collegeId = (collegeName[0].toUpperCase()+collegeName[1].toUpperCase()+collegeState+collegeType+collegeCity[0].toUpperCase()+year)
  }

  onNewCollege(postForm:NgForm){ 
    this.generateCollegeId(postForm.value.collegeName,postForm.value.collegeState,postForm.value.collegeType,postForm.value.collegeCity)
    const sendingData = {
      collegeId:this.collegeId,
      collegeName:postForm.value.collegeName,
      collegeCity:postForm.value.collegeCity,
      collegeState:postForm.value.collegeState,
      collegeAddress:postForm.value.collegeAddress,
      collegeLocationLat:postForm.value.collegeLocationLat,
      collegeLocationLong:postForm.value.collegeLocationLong,
      collegeType:postForm.value.collegeType,
      collegeAffiliatedTo:postForm.value.collegeAffiliatedTo,
      collegeEstablishment:postForm.value.collegeEstablishment,
      collegeEmail:postForm.value.collegeEmail,
      collegePassword:postForm.value.collegePassword
    }
    this.http.post<{message:string}>(this.url,sendingData).subscribe(
      (responseData)=>{
        if(responseData.message=='success'){
          this.router.navigate(['collegeLogin'])
        }
      }
    )
  }

}
