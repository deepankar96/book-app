import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({providedIn:'root'})

export class UserLoginService{
    private userId;

    constructor(private router:Router){}

    login(userId:string){
        this.userId = userId
        this.saveToken()
        this.router.navigate([''])
    }

    getUserId(){
        this.userId = localStorage.getItem("userId")
        return this.userId
    }

    logout(){
        this.userId = null
        this.removeToken()
        this.router.navigate(['landingPage'])
    }

    private saveToken(){
        localStorage.setItem("userId",this.userId);
        }

    private removeToken(){
        localStorage.removeItem("userId")
    }
}