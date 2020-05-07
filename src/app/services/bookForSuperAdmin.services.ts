import { book } from 'src/model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})

export class BookServiceForSuperAdmin{
    private booksForSuperAdmin:book[] = [];
    private booksUpdated = new Subject<book[]>();
    numberofBooks:number;

    contributorId:string;
    getBooksUrl = 'http://talkbook.in:3000/api/getBooksForSuperAdmin';

    constructor(private http:HttpClient){
    }

    getBooksForSuperAdmin(){
        this.http.get<{message:string,post}>(this.getBooksUrl).subscribe((postData)=>{
            this.booksForSuperAdmin = postData.post;
            this.booksUpdated.next([...this.booksForSuperAdmin])
          }); 
    }

    getBooksForSuperAdminListstner(){
        return this.booksUpdated.asObservable();
    }

    addBooksForSuperAdmin(recievedData:book){
        this.booksForSuperAdmin.push(recievedData);
        this.booksUpdated.next([...this.booksForSuperAdmin]);
    }
}
