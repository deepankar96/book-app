import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-signup-page',
  templateUrl: './user-signup-page.component.html',
  styleUrls: ['./user-signup-page.component.css']
})
export class UserSignupPageComponent implements OnInit {
  urlToAddUser:string = 'http://localhost:3000/api/signupUser';
  urlToAddHistory:string = 'http://localhost:3000/api/createHistoryTableForUser';

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId')){
      this.router.navigate([''])
    }
    localStorage.clear()
  }

  onSignupUser(postForm:NgForm){
    var currentDate = new Date()
    var minute = currentDate.getMinutes().toString()
    var second = currentDate.getSeconds().toString()
    var userid = postForm.value.userName.split(' ')[0] + minute + second
    const sendingData = {
      userId:userid,
      userName:postForm.value.userName,
      userPassword:postForm.value.userPassword,
    }
    this.http.post<{message:string,userId:string}>(this.urlToAddUser,sendingData).subscribe(
      (responseData) =>{
        if(responseData.message == 'success'){
          localStorage.setItem('newUser',userid)
          const newSendingData = {
            userId:responseData.userId
          }
          this.http.post<{message:string}>(this.urlToAddHistory,newSendingData).subscribe(
            (newresponseData)=>{
              if(newresponseData.message == 'success'){
                this.router.navigate(['userLogin'])
              }
            }
          );
          }
      }
    );
  }

}
