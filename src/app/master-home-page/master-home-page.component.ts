import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/userLogin.services';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-master-home-page',
  templateUrl: './master-home-page.component.html',
  styleUrls: ['./master-home-page.component.css']
})
export class MasterHomePageComponent implements OnInit {

  displayLogoutCommand:boolean = false;
  languages = [];
  urlToGetLanguages = 'http://talkbook.in:3000/api/getLanguages'

  constructor(public userLoginService:UserLoginService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if(!this.userLoginService.getUserId()){
      this.router.navigate(['landingPage'])
    }
    localStorage.removeItem("bookLanguage")
    localStorage.removeItem("newUser")
    this.http.get<{message:string,post:any}>(this.urlToGetLanguages).subscribe(
      (responseData)=>{
        this.languages = responseData.post
      }
    );
  }

  logoutUser(){
    if(window.confirm('Confirm Logout?')){
      this.userLoginService.logout()
    }
    else{

    }
  }

  routeForLanguages(language:string){
    localStorage.setItem("bookLanguage",language)
    this.router.navigate(['bookDisplay'])
  }
  routeToAssamese(){
    localStorage.setItem("bookLanguage",'assamese')
    this.router.navigate(['bookDisplay'])
  }
  routeToEnglish(){
    localStorage.setItem("bookLanguage",'english')
    this.router.navigate(['bookDisplay'])
  }
  routeToBengali(){
    localStorage.setItem("bookLanguage",'bengali')
    this.router.navigate(['bookDisplay'])
  }

  routeToReadingHistory(){
    this.router.navigate(['userReadingHistory'])
  }

}
