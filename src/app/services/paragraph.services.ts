import { paragraph } from 'src/model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import {ContributorLoginService} from './contributorLogin.services'

@Injectable({providedIn:'root'})

export class ParagraphService{
    private paragraphs:paragraph[] = [];
    private paraGraphUpdated = new Subject<paragraph[]>();
    numberofBooks:number;

    contributorId:string;
    getBooksUrl = 'http://localhost:3000/api/getParagraphsForBooks';

    constructor(private http:HttpClient,public contributorLoginService:ContributorLoginService){
    }

    getParagraphs(bookIdFromDashboard:string){
        const sendingData = {
            bookId:bookIdFromDashboard
        }
        this.http.post<{message:string,post}>(this.getBooksUrl,sendingData).subscribe((postData)=>{
            this. paragraphs = postData.post;
            this.paraGraphUpdated.next([...this.paragraphs])
          }); 
    }

    getparagraphsListstner(){
        return this.paraGraphUpdated.asObservable();
    }
}