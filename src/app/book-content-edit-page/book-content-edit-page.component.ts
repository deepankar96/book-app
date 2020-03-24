import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-content-edit-page',
  templateUrl: './book-content-edit-page.component.html',
  styleUrls: ['./book-content-edit-page.component.css']
})
export class BookContentEditPageComponent implements OnInit {
  bookId:string;
  displayParagraphBookForm:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookIdForContributor")
  }

}
