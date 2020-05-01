import { Component, OnInit, OnDestroy } from '@angular/core';
import { paragraph } from 'src/model';
import { Subscription } from 'rxjs';
import { ParagraphService } from '../services/paragraph.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-content-display-page',
  templateUrl: './book-content-display-page.component.html',
  styleUrls: ['./book-content-display-page.component.css']
})
export class BookContentDisplayPageComponent implements OnInit,OnDestroy {

  displayBookId:string;
  userId:string;
  paragraphs:paragraph[] = [];
  private paragraphSub:Subscription;
  urlToIncrementViewCount:string = 'http://talkbook.in:3000/api/updateViewCount';
  urlToAddHistory:string = 'http://talkbook.in:3000/api/addBookToHistory';

  constructor(public paragraphServices:ParagraphService,private http:HttpClient) { }

  ngOnInit(): void {
    this.displayBookId = localStorage.getItem('displaybookId')
    this.userId = localStorage.getItem('userId')
    const sendingData = {
      bookId:this.displayBookId
    }
    this.http.post(this.urlToIncrementViewCount,sendingData).subscribe();
    this.paragraphServices.getParagraphs(this.displayBookId)
    this.paragraphSub = this.paragraphServices.getparagraphsListstner().subscribe(
      (paragraphs:paragraph[])=>{
        this.paragraphs = paragraphs
      }
    );
    const newSendingData = {
      userId:this.userId+"-history",
      bookId:this.displayBookId
    }
    this.http.post(this.urlToAddHistory,newSendingData).subscribe();
  }
  ngOnDestroy(){
    this.paragraphSub.unsubscribe()
  }
}
