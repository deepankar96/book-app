import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({providedIn:'root'})

export class ContributorLoginService{
    private contributorId:string;
    private token:string;

    constructor(private router:Router){

    }

    loginToContributor(contributorId:string,token:string){
        this.contributorId = contributorId
        this.token = token
        this.router.navigate(['contributorHomepage'])
    }

    getContributorId(){
        return this.contributorId;
    }

    getToken(){
        return this.token;
    }
}