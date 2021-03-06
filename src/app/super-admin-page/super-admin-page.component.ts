import { Component, OnInit } from '@angular/core';
import { BookServiceForSuperAdmin } from '../services/bookForSuperAdmin.services';
import { book } from 'src/model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-super-admin-page',
  templateUrl: './super-admin-page.component.html',
  styleUrls: ['./super-admin-page.component.css']
})
export class SuperAdminPageComponent implements OnInit {
  booksForSuperAdmin:book[] = [];
  users = [];
  contributors = [];
  private bookSuperAdminSub:Subscription;
  urlToUpdateStatus:string = 'http://talkbook.in:3000/api/updateStatus';
  urlToViewUsers:string = 'http://talkbook.in:3000/api/viewUsers';
  urlToViewContributors:string = 'http://talkbook.in:3000/api/viewContributors';
  urlToAddContributors:string = 'http://talkbook.in:3000/api/addContributor';
  displayBooks:boolean = true;
  displayUserList:boolean = false;
  displayContributorList:boolean = false;
  displayAddContributor:boolean = false;
  displayNewContributorId:boolean = false;
  contributorIdDisplayed:string;


  constructor(public bookServiceForSuperAdmin:BookServiceForSuperAdmin,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem('su')!= 'yes'){
      this.router.navigate(['landingPage'])
    }
    this.bookServiceForSuperAdmin.getBooksForSuperAdmin()
    this.bookSuperAdminSub = this.bookServiceForSuperAdmin.getBooksForSuperAdminListstner().subscribe(
      (books:book[])=>{
        this.booksForSuperAdmin = books        
      }
    );
    this.http.get<{message:string,post}>(this.urlToViewUsers).subscribe(
      (responseData)=>{
        this.users = responseData.post
      }
    );
    this.http.get<{message:string,post}>(this.urlToViewContributors).subscribe(
      (responseData)=>{
        this.contributors = responseData.post
      }
    );
    }



  approveBook(bookIdSuperAdmin:string){
    const sendingData = {
      status:'approved',
      bookId:bookIdSuperAdmin
    }
    this.http.post<{message:string}>(this.urlToUpdateStatus,sendingData).subscribe(
      (responseData)=>{
        if(responseData.message == 'success'){
          window.location.reload();
        }
      }
    );
  }

  rejectBook(bookIdSuperAdmin:string){
    const sendingData = {
      status:'rejected',
      bookId:bookIdSuperAdmin
    }
    this.http.post<{message:string}>(this.urlToUpdateStatus,sendingData).subscribe(
      (responseData)=>{
        if(responseData.message == 'success'){
          window.location.reload();
        }
      }
    );
  }

  viewBook(bookId:string){
    localStorage.setItem('displaybookId',bookId)
    this.router.navigate(['superAdminBook'])
  }

  viewUserHistory(userId:string){
    localStorage.setItem('userId',userId)
    this.router.navigate(['superAdminReadingHistory'])
  }

  addContributor(postForm:NgForm){
    if(postForm.invalid){
      return
    }
    var currentDate = new Date()
    var minute = currentDate.getMinutes().toString()
    var second = currentDate.getSeconds().toString()
    const contributorId = postForm.value.contributorId.toString().toUpperCase() + minute + second;
    const sendingData = {
      contributorId:contributorId,
      contributorPassword:postForm.value.contributorPassword
    }
    this.http.post<{message:string,contributorId:string}>(this.urlToAddContributors,sendingData).subscribe(
      (responseData)=>{
        if(responseData.message == 'success'){
          this.contributorIdDisplayed = responseData.contributorId;
          this.displayNewContributorId = true;
        }
      }
      );
  }

  logout(){
    this.router.navigate(['userLogin'])
  }
}
