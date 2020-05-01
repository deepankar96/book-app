import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParagraphService } from '../services/paragraph.services';
import { HttpClient } from '@angular/common/http';
import { paragraph } from 'src/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-display-super-admin',
  templateUrl: './book-display-super-admin.component.html',
  styleUrls: ['./book-display-super-admin.component.css']
})
export class BookDisplaySuperAdminComponent implements OnInit,OnDestroy {
  displayBookId:string;
  paragraphs:paragraph[] = [];
  private paragraphSub:Subscription;
  urlToIncrementViewCount:string = 'http://talkbook.in:3000/api/updateViewCount';

  constructor(public paragraphServices:ParagraphService,private http:HttpClient) { }

  ngOnInit(): void {
    this.displayBookId = localStorage.getItem('displaybookId')
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
  }
  ngOnDestroy(){
    this.paragraphSub.unsubscribe()
  }
}
