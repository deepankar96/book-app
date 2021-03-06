import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ParagraphService} from '../services/paragraph.services'
import { paragraph } from 'src/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-content-edit-page',
  templateUrl: './book-content-edit-page.component.html',
  styleUrls: ['./book-content-edit-page.component.css']
})
export class BookContentEditPageComponent implements OnInit,OnDestroy{
  bookId:string;
  languaugeForContributor:string;
  displayParagraphBookForm:boolean = false;
  displayParagrapListForm:boolean = false;
  displayAddGenre:boolean = false;
  displayAddType:boolean = false;
  paragraphAudio:File;
  urlToAddParagraph:string = 'http://talkbook.in:3000/api/addParagraph';
  disableSubmitButton:boolean = true;
  paragraphs:paragraph[] = [];
  private paragraphSub:Subscription;
  genres = []
  types = []
  urlToGetGenre:string = 'http://talkbook.in:3000/api/getGenres'
  urlToGetType:string = 'http://talkbook.in:3000/api/getTypes'

  constructor(private http:HttpClient,private router:Router,public paragraphServices:ParagraphService) { 
    this.paragraphs = []
  }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookIdForContributor")
    this.languaugeForContributor = localStorage.getItem("bookLanguageForContributor")
    
    if(!this.bookId){
      this.router.navigate(['contributorHomepage'])
    }
    this.paragraphServices.getParagraphs(this.bookId)
    this.paragraphSub = this.paragraphServices.getparagraphsListstner().subscribe(
      (paragraphs:paragraph[])=>{
        this.paragraphs = paragraphs
      }
    );
    this.http.get<{post}>(this.urlToGetGenre).subscribe(
      (responseData)=>{
        this.genres = responseData.post
      }
    );
    this.http.get<{post}>(this.urlToGetType).subscribe(
      (responseData)=>{
        this.types = responseData.post
      }
    );
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
          window.location.reload();
        }
      }
    );
  }

  onAddAudio(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    //if(file.type.split('/')[1] == 'mp3' || file.type.split('/')[1]=='wav'){
      if(file.type.split('/')[0] == 'audio'){
      this.disableSubmitButton = false;
      this.paragraphAudio = file;
    }
    else{
      this.disableSubmitButton = true;
    }
  }

  discardButton(){
    if(window.confirm('Confirm to Discard?')){
      this.displayParagraphBookForm = false
    }
    else{

    }
  }

  addGenre(postform1:NgForm){
    console.log(postform1.value)
  }

  ngOnDestroy(){
    this.paragraphSub.unsubscribe()
  }
}
