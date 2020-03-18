import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contributor-login',
  templateUrl: './contributor-login.component.html',
  styleUrls: ['./contributor-login.component.css']
})
export class ContributorLoginComponent implements OnInit {
  url= 'http://localhost:3000/api/contributorLogin';

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmitContributorLogin(postForm:NgForm){
    this.http.post<{message:string,token:string,contributorId:string}>(this.url,postForm.value).subscribe(
      (responseData)=>{
        if(responseData.message == "success"){
          console.log(responseData)
        }
        else{
          console.log(responseData.message)
        }
      }
    );
  }

}
