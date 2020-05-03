import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-user-history-page',
  templateUrl: './super-admin-user-history-page.component.html',
  styleUrls: ['./super-admin-user-history-page.component.css']
})
export class SuperAdminUserHistoryPageComponent implements OnInit {
  userId:string;
  books = [];
  url= 'http://localhost:3000/api/viewBookToHistory';

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

  viewBook(displaybookId:string){
    localStorage.setItem('displaybookId',displaybookId)
    this.router.navigate(['superAdminBook'])
  }

}
