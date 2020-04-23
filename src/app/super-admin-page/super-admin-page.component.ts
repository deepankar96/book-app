import { Component, OnInit } from '@angular/core';
import { BookServiceForSuperAdmin } from '../services/bookForSuperAdmin.services';
import { book } from 'src/model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-super-admin-page',
  templateUrl: './super-admin-page.component.html',
  styleUrls: ['./super-admin-page.component.css']
})
export class SuperAdminPageComponent implements OnInit {
  booksForSuperAdmin:book[] = [];
  private bookSuperAdminSub:Subscription;
  urlToUpdateStatus:string = 'http://localhost:3000/api/updateStatus';

  constructor(public bookServiceForSuperAdmin:BookServiceForSuperAdmin,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.bookServiceForSuperAdmin.getBooksForSuperAdmin()
    this.bookSuperAdminSub = this.bookServiceForSuperAdmin.getBooksForSuperAdminListstner().subscribe(
      (books:book[])=>{
        this.booksForSuperAdmin = books
        localStorage.clear()
      }
    );
  }


  approveBook(bookIdSuperAdmin:string){
    const sendingData = {
      status:'approved',
      bookId:bookIdSuperAdmin
    }
    this.http.post(this.urlToUpdateStatus,sendingData).subscribe();
  }

  rejectBook(bookIdSuperAdmin:string){
    const sendingData = {
      status:'rejected',
      bookId:bookIdSuperAdmin
    }
    this.http.post(this.urlToUpdateStatus,sendingData).subscribe();
  }

  viewBook(bookId:string){
    localStorage.setItem('displaybookId',bookId)
    this.router.navigate(['superAdminBook'])
  }

  logout(){
    this.router.navigate(['userLogin'])
  }
}
