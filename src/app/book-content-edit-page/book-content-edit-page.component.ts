import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-content-edit-page',
  templateUrl: './book-content-edit-page.component.html',
  styleUrls: ['./book-content-edit-page.component.css']
})
export class BookContentEditPageComponent implements OnInit {
  bookId:string;
  displayParagraphBookForm:boolean = false;
  paragraphAudio:File;
  urlToAddParagraph:string = 'http://localhost:3000/api/addParagraph';
  disableSubmitButton:boolean = true;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookIdForContributor")
  }

  onSubmitParagraph(postform:NgForm){
    const formData = new FormData();
    formData.append('paragraphNumber',postform.value.paragraphNumber);
    formData.append('paragraphTitle',postform.value.paragraphTitle);
    formData.append('bookId',this.bookId);
    formData.append('paragraphAudio',this.paragraphAudio);
    this.http.post<{message:string}>(this.urlToAddParagraph,formData).subscribe(
      (responseData) =>{
        if(responseData.message == 'success'){
          this.displayParagraphBookForm = false;
          this.disableSubmitButton = true;
        }
      }
    );
  }

  onAddAudio(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    if(file.type.split('/')[1] == 'mp3' || file.type.split('/')[1]=='wav'){
      this.disableSubmitButton = false;
      this.paragraphAudio = file;
    }
    else{
      this.disableSubmitButton = true;
    }
  }
}
