import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ContributorHomepageComponent implements OnInit,OnDestroy {
  contributorId:string='';
  contributorToken:string='';
  displayAddBookForm:boolean = false;
  displayListBookContents:boolean = false;
  bookId:string;
  urlToAddBook:string = 'http://localhost:3000/api/addbook';
  urlToCreateTable:string = 'http://localhost:3000/api/createDataTableForBook';
  books:book[] = [];
  private bookSub:Subscription;
  coverImageFile:File;

  constructor(public contributorLoginService:ContributorLoginService,private router:Router,private http:HttpClient,public bookServices:BookService) {
   }

  ngOnInit(): void {
    if(!this.contributorLoginService.getToken() || !this.contributorLoginService.getContributorId()){
      this.router.navigate(['contributorLogin'])
    }
    localStorage.removeItem("bookIdForContributor")
    this.contributorId=this.contributorLoginService.getContributorId()
    this.contributorToken=this.contributorLoginService.getToken()
    this.bookServices.getBooks(this.contributorId)
    this.bookSub = this.bookServices.getBooksListstner().subscribe(
      (books:book[])=>{
        this.books = books
      }
    );
  }

  ngOnDestroy(){
    this.bookSub.unsubscribe();
  }

  logout(){
    this.contributorLoginService.logoutOfContributor()
  }

  addBook(postForm:NgForm){
    if(postForm.invalid){
      return
    }
    var currentDate = new Date();
    var minute = currentDate.getMinutes().toString();
    var second = currentDate.getSeconds().toString();
    var generateBookId = postForm.value.bookLanguage + minute + second +postForm.value.bookName[0];
    const sendingData = {
      contributorId:this.contributorLoginService.getContributorId(),
      bookId:generateBookId,
      bookName:postForm.value.bookName,
      bookLanguage:postForm.value.bookLanguage,
      bookCover:this.coverImageFile
    }

    const formDataNew:FormData = new FormData();
    formDataNew.append('contributorId',this.contributorLoginService.getContributorId());
    formDataNew.append('bookId', generateBookId);
    formDataNew.append('bookName', postForm.value.bookName);
    formDataNew.append('bookLanguage', postForm.value.bookLanguage);
    formDataNew.append('bookCover', this.coverImageFile);
    // for (var value of formDataNew.values()) {
    //   console.log(value); 
    // }
    this.http.post<{message:string,bookId:string}>(this.urlToAddBook,formDataNew).subscribe(
      (responseData)=>{
        if(responseData.message == 'success'){
          const newSendingData = {
            bookId:responseData.bookId
          }
          this.http.post<{message:string}>(this.urlToCreateTable,newSendingData).subscribe(
            (newResponseData) => {
              if(newResponseData.message == 'success'){
                window.location.reload();
              }
            }
          );
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


  addBookToLocalStorage(bookId){
    localStorage.setItem("bookIdForContributor",bookId)
    this.router.navigate(['contributorBookDisplay'])
  }

  onAddImage(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.coverImageFile = file
  }                                                                                                                                                                                                                                        

}
