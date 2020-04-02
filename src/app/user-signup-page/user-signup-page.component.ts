import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  }

  onSignupUser(postForm:NgForm){
    var currentDate = new Date()
    var minute = currentDate.getMinutes().toString()
    var second = currentDate.getSeconds().toString()
    var userid = postForm.value.userName.split(' ')[0] + minute + second
    const sendingData = {
      userId:userid,
      userName:postForm.value.userName,
      userPassword:postForm.value.userPassword,
    }
    console.log(sendingData)
  }

}
