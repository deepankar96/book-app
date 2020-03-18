import { Injectable } from '@angular/core';



@Injectable({providedIn:'root'})

export class ContributorLoginService{
    private contributorId:string;
    private token:string;

    loginToContributor(contributorId:string,token:string){
        this.contributorId = contributorId
        this.token = token
    }

    getContributorId(){
        return this.contributorId;
    }

    getToken(){
        return this.token;
    }
}