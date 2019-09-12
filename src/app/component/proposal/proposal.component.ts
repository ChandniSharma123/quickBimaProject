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
  premiumData: any = [];
  hospitalPremium: any = [];
  ncbPremium: any = [];
  reloadPremium: any = [];
  carePremium: any = [];
  religareNcbPremium: any = [];
  roomCategoryPremium: any = [];
  critical_premium: any = [];
  hospital_premium_new: any = [];
  bonus_premium_new: any = [];
  constructor(private router: Router) { }

  ngOnInit() {

    this.getData = JSON.parse(localStorage.getItem('proposal') || '[]')
    this.getUserData = JSON.parse(localStorage.getItem('user') || '[]')
    this.premiumData = JSON.parse(localStorage.getItem('premiumResponse') || '[]')
    console.log(this.premiumData.results.response);
    this.hospitalPremium = this.premiumData.results.response.hospitalPremium;
    this.ncbPremium = this.premiumData.results.response.ncbPremium;
    this.reloadPremium = this.premiumData.results.response.reloadPremium;
    this.roomCategoryPremium = this.premiumData.results.response.roomCategoryPremium;
    this.carePremium = this.premiumData.results.response.carePremium
    this.critical_premium = this.premiumData.results.response.critical_premium_new
    this.hospital_premium_new = this.premiumData.results.response.hospital_premium_new
    this.bonus_premium_new = this.premiumData.results.response.bonus_premium_new

    this.middleSection = this.getData.middleSection
    this.healthCover = this.getUserData.healthCover
    this.sumInsured = this.getUserData.sum_insured
    this.imageLogo = this.getData.CompanyDetails.logo
    this.finalPremium = this.getData.premiumDetails.finalPremium


    this.religareNcbPremium = this.premiumData.results.response.religareNcbPremium

  }

  onToggle(e) {
    console.log(e.target.id)
    // console.log(e)
    if(e.target.checked == true){
    if (e.target.id == 'ncb') {
      // console.log(this.ncbPremium)
      this.finalPremium = this.ncbPremium + this.finalPremium;
    }
    else {
    console.log('go')
      this.finalPremium = this.finalPremium;
    }

     if (e.target.id == 'cbs') {
    
      //   console.log(this.bonus_premium_new);
      this.finalPremium = this.bonus_premium_new + this.finalPremium;
    }

    else {
      console.log('in')
      this.finalPremium = this.finalPremium;
    }
     if (e.target.id == 'rld') {
      // console.log(this.reloadPremium)
      this.finalPremium = this.reloadPremium + this.finalPremium;

    }
    else {
      this.finalPremium = this.finalPremium;
    }
    if (e.target.id == 'rmrpd') {
      // console.log(this.critical_premium)
      this.finalPremium = this.roomCategoryPremium + this.finalPremium
    }

    else {
      this.finalPremium = this.finalPremium;
    }

    console.log(e, this.finalPremium)
  }
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
  goOnProposalForm(event) {


    this.router.navigate(['/health-insurance/quotes/proposal/propForm'])
  }

}
