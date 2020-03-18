import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeLoginService } from '../services/collegeLogin.services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router,
    public collegeLoginService:CollegeLoginService) { }

  ngOnInit(): void {
    if(!this.collegeLoginService.getCollegeId()){
      this.router.navigate(['collegeLogin'])
    }
  }

  routeToDepartment(){
    this.router.navigate(['department']);
  }

}
