import { Component, OnInit } from '@angular/core';
import { ContributorLoginService } from '../services/contributorLogin.services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contributor-homepage',
  templateUrl: './contributor-homepage.component.html',
  styleUrls: ['./contributor-homepage.component.css']
})
export class ContributorHomepageComponent implements OnInit {
  contributorId:string='';
  contributorToken:string='';
  displayAddBookForm:boolean = false;
  bookId:string;
  urlToAddBook:string = 'http://localhost:3000/api/addbook';

  constructor(public contributorLoginService:ContributorLoginService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if(!this.contributorLoginService.getToken() || !this.contributorLoginService.getContributorId()){
      this.router.navigate(['contributorLogin'])
    }
    this.contributorId=this.contributorLoginService.getToken()
    this.contributorToken=this.contributorLoginService.getContributorId()
  }

  logout(){
    this.contributorLoginService.logoutOfContributor()
  }

  addBook(postForm:NgForm){
    if(postForm.invalid){
      return
    }
    const sendingData = {
      contributorId:this.contributorLoginService.getContributorId(),
      bookId:postForm.value.bookId,
      bookName:postForm.value.bookName,
      bookLanguage:postForm.value.bookLanguage,
    }
    this.http.post<{message:string}>(this.urlToAddBook,sendingData).subscribe(
      (responseData)=>{
        if(responseData.message == 'success'){
          this.displayAddBookForm = false
        }
      }
    );
    
  }

  checkBookId(){
    console.log(this.bookId)
  }

}
