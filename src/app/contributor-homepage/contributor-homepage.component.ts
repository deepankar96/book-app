import { Component, OnInit } from '@angular/core';
import { ContributorLoginService } from '../services/contributorLogin.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contributor-homepage',
  templateUrl: './contributor-homepage.component.html',
  styleUrls: ['./contributor-homepage.component.css']
})
export class ContributorHomepageComponent implements OnInit {
  contributorId:string='';
  contributorToken:string='';

  constructor(public contributorLoginService:ContributorLoginService,private router:Router) { }

  ngOnInit(): void {
    if(!this.contributorLoginService.getToken() || !this.contributorLoginService.getContributorId()){
      this.router.navigate(['contributorLogin'])
    }
    this.contributorId=this.contributorLoginService.getToken()
    this.contributorToken=this.contributorLoginService.getContributorId()
  }

  logout(){
    this.contributorLoginService.logoutOfContributor()
  }

}
