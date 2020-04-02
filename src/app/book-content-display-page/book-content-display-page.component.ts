import { Component, OnInit, OnDestroy } from '@angular/core';
import { paragraph } from 'src/model';
import { Subscription } from 'rxjs';
import { ParagraphService } from '../services/paragraph.services';

@Component({
  selector: 'app-book-content-display-page',
  templateUrl: './book-content-display-page.component.html',
  styleUrls: ['./book-content-display-page.component.css']
})
export class BookContentDisplayPageComponent implements OnInit,OnDestroy {

  displayBookId:string;
  paragraphs:paragraph[] = [];
  private paragraphSub:Subscription;

  constructor(public paragraphServices:ParagraphService) { }

  ngOnInit(): void {
    this.displayBookId = localStorage.getItem('displaybookId')
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
