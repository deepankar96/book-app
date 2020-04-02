import { Component, OnInit } from '@angular/core';
import { BookServicePerLanguage } from '../services/bookPerLanguage.services';
import { Subscription } from 'rxjs';
import { book } from 'src/model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-display-page',
  templateUrl: './book-display-page.component.html',
  styleUrls: ['./book-display-page.component.css']
})
export class BookDisplayPageComponent implements OnInit {
  bookLanguage:string;
  bookPerLanguageSub:Subscription;
  books:book[] = [];
  displayBookContents:boolean = false;
  userId:string;
  urlForLikedPosts:string = 'http://localhost:3000/api/likeBook';

  constructor(public bookPerLanguageService:BookServicePerLanguage,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId")
    this.bookLanguage=localStorage.getItem("bookLanguage")
    this.bookPerLanguageService.getBooks(this.bookLanguage)
    localStorage.removeItem('displaybookId')
    this.bookPerLanguageSub = this.bookPerLanguageService.getBooksListstner().subscribe(
      (books:book[])=>{
        this.books = books
        this.displayBookContents = true
      }
    );
  }

  likeBook(bookId:string,bookName:string){
    const sendingData = {
      userId: this.userId,
      bookId: bookId,
      bookName:bookName
    }
    this.http.post<{message:string}>(this.urlForLikedPosts,sendingData).subscribe(
      (responseData)=>{
        console.log(responseData.message)
      }
    );
  }


  viewBookDetails(bookId:string){
    localStorage.setItem('displaybookId',bookId)
    this.router.navigate(['userBookDisplay'])
  }

}
