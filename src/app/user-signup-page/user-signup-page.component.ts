import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup-page',
  templateUrl: './user-signup-page.component.html',
  styleUrls: ['./user-signup-page.component.css']
})
export class UserSignupPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId')){
      this.router.navigate([''])
    }
    var currentDate = new Date()
    console.log(currentDate.getSeconds())
    console.log(currentDate.getMinutes())
  }

}
