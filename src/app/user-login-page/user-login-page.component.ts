import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  errorMessage:string;

  constructor() { }

  ngOnInit(): void {
  }

  loginToUser(postForm:NgForm){
    console.log(postForm.value)
  }

}
