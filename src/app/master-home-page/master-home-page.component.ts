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
      this.router.navigate(['userLogin'])
    }
  }

  logoutUser(){
    this.userLoginService.logout()
  }

}
