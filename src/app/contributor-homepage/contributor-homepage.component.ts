import { Component, OnInit } from '@angular/core';
import { ContributorLoginService } from '../services/contributorLogin.services';
import { BookService } from '../services/book.services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { book } from 'src/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contributor-homepage',
  templateUrl: './contributor-homepage.component.html',
  styleUrls: ['./contributor-homepage.component.css']
})
export class ContributorHomepageComponent implements OnInit {
  contributorId:string='';
  contributorToken:string='';
  displayAddBookForm:boolean = false;
  displayListBookContents:boolean = false;
  bookId:string;
  urlToAddBook:string = 'http://localhost:3000/api/addbook';
  books:book[] = [];
  private bookSub:Subscription;

  constructor(public contributorLoginService:ContributorLoginService,private router:Router,private http:HttpClient,public bookServices:BookService) { }

  ngOnInit(): void {
    if(!this.contributorLoginService.getToken() || !this.contributorLoginService.getContributorId()){
      this.router.navigate(['contributorLogin'])
    }
    this.contributorId=this.contributorLoginService.getToken()
    this.contributorToken=this.contributorLoginService.getContributorId()
    this.bookServices.getBooks()
    this.bookSub = this.bookServices.getBooksListstner().subscribe(
      (books:book[])=>{
        this.books = books
      }
    );
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

  listBook(){
  this.displayAddBookForm = false
  this.displayListBookContents = true    
  }

  checkBookId(){
    console.log(this.bookId)
  }

}
