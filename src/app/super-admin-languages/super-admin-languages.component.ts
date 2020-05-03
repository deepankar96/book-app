import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-languages',
  templateUrl: './super-admin-languages.component.html',
  styleUrls: ['./super-admin-languages.component.css']
})
export class SuperAdminLanguagesComponent implements OnInit {
  displayLanguageList:boolean = false;
  urlToAddLanguage = 'http://localhost:3000/api/addLanguage'
  urlToAddLanguageTable = 'http://localhost:3000/api/createDataTableForLanguage'
  urlToGetLanguageTable = 'http://localhost:3000/api/getLanguages'
  languages = []

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem('language')
    this.http.get<{post}>(this.urlToGetLanguageTable).subscribe(
      (responseData)=>{
        this.languages = responseData.post
      }
    );
  }
  toggleLanguageList(){
    if(this.displayLanguageList == true){
      this.displayLanguageList = false
    }
    else{
      this.displayLanguageList = true
    }
  }

  addLanguage(postForm:NgForm){
    this.http.post<{message:string}>(this.urlToAddLanguage,postForm.value).subscribe(
      (responseData)=>{
        if(responseData.message == 'success'){
          this.http.post<{finalMessage:string}>(this.urlToAddLanguageTable,postForm.value).subscribe(
            (newResopnseData)=>{
              alert(newResopnseData.finalMessage)
            }
          )
        }
      }
    );
  }

  routeToaddGenre(language:string){
    localStorage.setItem('language',language)
    this.router.navigate(['superAdminGenre'])
  }
}
