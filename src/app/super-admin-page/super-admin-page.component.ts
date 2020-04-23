import { Component, OnInit } from '@angular/core';
import { BookServiceForSuperAdmin } from '../services/bookForSuperAdmin.services';
import { book } from 'src/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-super-admin-page',
  templateUrl: './super-admin-page.component.html',
  styleUrls: ['./super-admin-page.component.css']
})
export class SuperAdminPageComponent implements OnInit {
  booksForSuperAdmin:book[] = [];
  private bookSuperAdminSub:Subscription;

  constructor(public bookServiceForSuperAdmin:BookServiceForSuperAdmin) { }

  ngOnInit(): void {
    this.bookServiceForSuperAdmin.getBooksForSuperAdmin()
    this.bookSuperAdminSub = this.bookServiceForSuperAdmin.getBooksForSuperAdminListstner().subscribe(
      (books:book[])=>{
        this.booksForSuperAdmin = books
      }
    );
  }

}
