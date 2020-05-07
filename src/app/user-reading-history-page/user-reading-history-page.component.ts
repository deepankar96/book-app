import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reading-history-page',
  templateUrl: './user-reading-history-page.component.html',
  styleUrls: ['./user-reading-history-page.component.css']
})
export class UserReadingHistoryPageComponent implements OnInit {

  userId:string;
  books = [];
  url= 'http://talkbook.in:3000/api/viewBookToHistory';

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    const sendingData ={
      userId:this.userId
    }
    this.http.post<{message:string,post:any}>(this.url,sendingData).subscribe(
      (responseData)=>{
        this.books = responseData.post
      }
    );
  }

  viewBookDetails(bookId:string){
    localStorage.setItem('displaybookId',bookId)
    this.router.navigate(['userBookDisplay'])
  }

}
