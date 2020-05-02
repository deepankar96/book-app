import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/userLogin.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-home-page',
  templateUrl: './master-home-page.component.html',
  styleUrls: ['./master-home-page.component.css']
})
export class MasterHomePageComponent implements OnInit {

  constructor(public userLoginService:UserLoginService,private router:Router) { }

  ngOnInit(): void {
    if(!this.userLoginService.getUserId()){
      this.router.navigate(['landingPage'])
    }
    localStorage.removeItem("bookLanguage")
    localStorage.removeItem("newUser")
  }

  logoutUser(){
    this.userLoginService.logout()
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
