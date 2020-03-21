import { book } from 'src/model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import {ContributorLoginService} from './contributorLogin.services'

@Injectable({providedIn:'root'})

export class DepartmentService{
    private books:book[] = [];
    private booksUpdated = new Subject<book[]>();
    numberofBooks:number;

    contributorId:string;
    getBooksUrl = '';

    constructor(private http:HttpClient,public contributorLoginService:ContributorLoginService){
        this.contributorId = contributorLoginService.getContributorId()
    }

    getBooks(){
        const sendingData = {
            contributorId:this.contributorId
        }
        this.http.post<{message:string,post}>(this.getBooksUrl,sendingData).subscribe((postData)=>{
            this. books = postData.post;
            this.booksUpdated.next([...this.books])
          }); 
    }

    getBooksListstner(){
        return this.booksUpdated.asObservable();
    }

    addBook(recievedData:book){
        this.books.push(recievedData);
        this.booksUpdated.next([...this.books]);
    }
}