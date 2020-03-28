import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-content-edit-page',
  templateUrl: './book-content-edit-page.component.html',
  styleUrls: ['./book-content-edit-page.component.css']
})
export class BookContentEditPageComponent implements OnInit {
  bookId:string;
  displayParagraphBookForm:boolean = false;
  paragraphAudio:File;
  constructor() { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookIdForContributor")
  }

  onSubmitParagraph(postform:NgForm){
    const sendingData = {
      paragraphId:postform.value.paragraphId,
      paragraphTitle:postform.value.paragraphTitle,
      pragraphAudio:this.paragraphAudio
    }
    console.log(sendingData)
  }

  onAddAudio(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.paragraphAudio = file;
  }
}
