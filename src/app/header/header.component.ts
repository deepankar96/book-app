import { Component, OnInit } from '@angular/core';
import { CollegeLoginService } from '../services/collegeLogin.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public colllegeLoginService:CollegeLoginService,private router:Router) { }

  ngOnInit(): void {
  }

  reset(){
    this.colllegeLoginService.logout()
    this.router.navigate(['collegeLogin'])
  }

}
