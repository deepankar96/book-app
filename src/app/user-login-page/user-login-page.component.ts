import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserLoginService } from '../services/userLogin.services';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  errorMessage:string;
  url:string = 'http://localhost:3000/api/userLogin';

  constructor(private http:HttpClient,public userLoginService:UserLoginService) { }

  ngOnInit(): void {
  }

  loginToUser(postForm:NgForm){
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

}
