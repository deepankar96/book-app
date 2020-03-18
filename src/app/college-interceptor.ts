import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollegeLoginService } from './services/collegeLogin.services';


@Injectable()
export class collegeAuthInterceptor implements HttpInterceptor{


    constructor(public collegeLoginService:CollegeLoginService){

    }

    intercept(req:HttpRequest<any>,next:HttpHandler){
        const token = this.collegeLoginService.getToken();
        const collegeAuthReq = req.clone({
            headers:req.headers.set('collegeAuthorization',"Bearer " + token)
        });
        return next.handle(collegeAuthReq);
    }
}