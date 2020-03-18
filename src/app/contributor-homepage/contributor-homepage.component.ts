import { Component, OnInit } from '@angular/core';
import { ContributorLoginService } from '../services/contributorLogin.services';

@Component({
  selector: 'app-contributor-homepage',
  templateUrl: './contributor-homepage.component.html',
  styleUrls: ['./contributor-homepage.component.css']
})
export class ContributorHomepageComponent implements OnInit {

  constructor(public contributorLoginService:ContributorLoginService) { }

  ngOnInit(): void {
    console.log(this.contributorLoginService.getToken())
    console.log(this.contributorLoginService.getContributorId())
  }

}
