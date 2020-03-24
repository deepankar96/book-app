import { Component, OnInit } from '@angular/core';
import { BookServicePerLanguage } from '../services/bookPerLanguage.services';
import { Subscription } from 'rxjs';
import { book } from 'src/model';

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

  constructor(public bookPerLanguageService:BookServicePerLanguage) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId")
    this.bookLanguage=localStorage.getItem("bookLanguage")
    this.bookPerLanguageService.getBooks(this.bookLanguage)
    this.bookPerLanguageSub = this.bookPerLanguageService.getBooksListstner().subscribe(
      (books:book[])=>{
        this.books = books
        this.displayBookContents = true
      }
    );
  }

  likeBook(bookId:string){
    console.log(this.userId)
    console.log(bookId)
  }

}
