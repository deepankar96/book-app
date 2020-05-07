import { book } from 'src/model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import {ContributorLoginService} from './contributorLogin.services'

@Injectable({providedIn:'root'})

export class BookServicePerLanguage{
    private books:book[] = [];
    private booksUpdated = new Subject<book[]>();
    numberofBooks:number;

    contributorId:string;
    getBooksUrl = 'http://talkbook.in:3000/api/getBooksPerLanguage';

    constructor(private http:HttpClient,public contributorLoginService:ContributorLoginService){
    }

    getBooks(LanguageFromDashboard:string){
        const sendingData = {
            Language:LanguageFromDashboard
        }
        this.http.post<{message:string,post}>(this.getBooksUrl,sendingData).subscribe((postData)=>{
            this. books = postData.post;
            this.booksUpdated.next([...this.books])
          }); 
    }

    getBooksListstner(){
        return this.booksUpdated.asObservable();
    }

}