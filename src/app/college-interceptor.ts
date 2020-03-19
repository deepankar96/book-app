import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContributorLoginService } from './services/contributorLogin.services';


@Injectable()
export class collegeAuthInterceptor implements HttpInterceptor{


    constructor(public contributorLoginService:ContributorLoginService){

    }

    intercept(req:HttpRequest<any>,next:HttpHandler){
        const token = this.contributorLoginService.getToken()
        const collegeAuthReq = req.clone({
            headers:req.headers.set('collegeAuthorization',"Bearer " + token)
        });
        return next.handle(collegeAuthReq);
    }
}