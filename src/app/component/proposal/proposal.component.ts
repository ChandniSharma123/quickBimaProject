import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  getData: any = [];
  getUserData: any = [];
  finalPremium: any = [];
  healthCover: any = [];
  middleSection: any = [];
  sumInsured: any = [];
  imageLogo: any = [];
  constructor(private router: Router) { }

  ngOnInit() {

    this.getData = JSON.parse(localStorage.getItem('proposal') || '[]')
    this.getUserData = JSON.parse(localStorage.getItem('user') || '[]')
    console.log(this.getUserData)
    this.middleSection = this.getData.middleSection
    this.healthCover = this.getUserData.healthCover
    this.sumInsured = this.getUserData.sum_insured
    this.imageLogo = this.getData.CompanyDetails.logo
    this.finalPremium = this.getData.premiumDetails.finalPremium


  }

  backTOQuotes() {
    this.router.navigate(['/health-insurance/quotes'],
    {
      queryParams: {
        id: 'proposal'

      }
    }
  )
    console.log(this.getUserData)
  }
}
