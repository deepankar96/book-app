import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup-page',
  templateUrl: './user-signup-page.component.html',
  styleUrls: ['./user-signup-page.component.css']
})
export class UserSignupPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var currentDate = new Date()
    console.log(currentDate.getSeconds())
    console.log(currentDate.getMinutes())
  }

}
