import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-genre-superadmin',
  templateUrl: './add-genre-superadmin.component.html',
  styleUrls: ['./add-genre-superadmin.component.css']
})
export class AddGenreSuperadminComponent implements OnInit {

  language:string;
  genres = []
  types = []
  urlToGetGenre:string = 'http://localhost:3000/api/getGenres'
  urlToGetType:string = 'http://localhost:3000/api/getTypes'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.language = localStorage.getItem('language')
    this.http.get<{post}>(this.urlToGetGenre).subscribe(
      (responseData)=>{
        this.genres = responseData.post
      }
    );
    this.http.get<{post}>(this.urlToGetType).subscribe(
      (responseData)=>{
        this.types = responseData.post
      }
    );
  }

}
