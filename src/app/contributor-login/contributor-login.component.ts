import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ContributorLoginService} from '../services/contributorLogin.services'

@Component({
  selector: 'app-contributor-login',
  templateUrl: './contributor-login.component.html',
  styleUrls: ['./contributor-login.component.css']
})
export class ContributorLoginComponent implements OnInit {
  url= 'http://localhost:3000/api/contributorLogin';
  errorMessage:string = '';

  constructor(private http:HttpClient,private router:Router,public contributorLoginService:ContributorLoginService) { }

  ngOnInit(): void {
  }

  onSubmitContributorLogin(postForm:NgForm){
    const sendingData = {
      contributorId:postForm.value.contributorId.toUpperCase(),
      contributorPassword:postForm.value.contributorPassword
    }
    console.log(sendingData)
    this.http.post<{message:string,token:string,contributorId:string}>(this.url,sendingData).subscribe(
      (responseData)=>{
        if(responseData.message == "success"){
          this.contributorLoginService.loginToContributor(responseData.contributorId,responseData.token);
        }
        else{
          this.errorMessage = responseData.message
        }
      }
    );
  }

}
