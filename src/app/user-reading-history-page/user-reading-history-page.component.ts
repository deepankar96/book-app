import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reading-history-page',
  templateUrl: './user-reading-history-page.component.html',
  styleUrls: ['./user-reading-history-page.component.css']
})
export class UserReadingHistoryPageComponent implements OnInit {

  userId:string;

  constructor() { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    console.log(this.userId)
  }

}
