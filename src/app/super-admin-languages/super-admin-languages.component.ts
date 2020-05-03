import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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
}
