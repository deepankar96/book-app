import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './book.services';



@Injectable({providedIn:'root'})

export class ContributorLoginService{
    private contributorId:string;
    private contributorToken:string;

    constructor(private router:Router){

    }

    loginToContributor(contributorId:string,token:string){
        this.contributorId = contributorId
        this.contributorToken = token
        this.saveToken()
        this.router.navigate(['contributorHomepage'])
    }

    logoutOfContributor(){
        this.contributorToken = null;
        this.contributorId = null;
        this.removeToken()
        this.router.navigate(['contributorLogin'])
    }

    getContributorId(){
        this.contributorId = localStorage.getItem("contributorId")
        return this.contributorId;
    }

    getToken(){
        this.contributorToken = localStorage.getItem("contributorToken")
        return this.contributorToken;
    }

    private saveToken(){
        localStorage.setItem("contributorToken",this.contributorToken);
        localStorage.setItem("contributorId",this.contributorId);
        }

    private removeToken(){
        localStorage.removeItem("contributorToken")
        localStorage.removeItem("contributorId")
    }
}