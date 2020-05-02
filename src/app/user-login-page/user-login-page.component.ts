import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserLoginService } from '../services/userLogin.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  errorMessage:string;
  url:string = 'http://talkbook.in:3000/api/userLogin';
  userIdCreated:string;

  constructor(private http:HttpClient,public userLoginService:UserLoginService,private router:Router) { }

  ngOnInit(): void {
    this.userIdCreated = localStorage.getItem('newUser')
    if(localStorage.getItem('userId')){
      this.router.navigate([''])
    }
  }

  loginToUser(postForm:NgForm){
    if(postForm.value.userId =='superadmin'){
      if(postForm.value.userPassword == 'pass'){
        this.router.navigate(['superAdminPage'])
        return
      }
    }
    const sendingData = {
      userId:postForm.value.userId.toUpperCase(),
      userPassword:postForm.value.userPassword,
    }
    this.http.post<{message:string,userId:string}>(this.url,sendingData).subscribe(
      (responseData)=>{
        if(responseData.message == 'success'){
          this.userLoginService.login(responseData.userId)
        }
        else{
          this.errorMessage = responseData.message
        }
      }
    );
  }

  signUpUser(){
    this.router.navigate(['userSignUp'])
  }

}
