import { Component, OnInit, Input } from '@angular/core';
import { HealthQuotesService } from '../health-quotes/health-quotes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditService } from '../edit-info/edit.service';
import { BlockingProxy } from 'blocking-proxy';
import { runInThisContext } from 'vm';
import { HomeService } from '../home/home.service'
import { strictEqual } from 'assert';
@Component({
  selector: 'app-health-quotes',
  templateUrl: './health-quotes.component.html',
  styleUrls: ['./health-quotes.component.css']
})


export class HealthQuotesComponent implements OnInit {
  storing: any;
  quotesArray2: any = [];
  quotesArray: any;
  specialFeaturee: any = [];
  loader: boolean = true;
  showExclusion: boolean = false;
  sumInsured: any;
  storeComparedData: any;
  cLogo: any;
  specialFeatures: any = [];
  sidata: any = [];
  savedtitle: any;
  storecompareTitle: any = [];
  pushedArrayInsurer: any[] = [];

  compareplan: any;
  policyBrochure: any;
  specialFeature: any = [];
  detailsDiv: boolean = false;
  featuresList: boolean = true;
  brochure: any;
  storeChild: any;
  healthCover: string;
  storeAdult: any;
  pDetails: any;
  specialFeatureList: any = [];
  cId: any;
  pdfConvertor: any;
  pushAray: any = [];
  cardCompare: boolean = false;
  openEdit: boolean = false;
  hospitalcount: any = [];
  constructor(private healthquote: HealthQuotesService, private route: ActivatedRoute, private editserv: EditService,
    private router: Router, private homeService: HomeService) { }
  storeParams;
  store: any = [];
  logo: any
  addData: boolean = false;
  editData: boolean = false;
  storequote: any;
  jsonObject: any;
  showCard: boolean = true;
  responsePlan: any = [];
  cashlessHospital: any = [];
  storepushedValue: any = [];
  storeemail: any;
  storegender: any;
  storecity: any;
  storestate: any;
  storemobile: any;
  sub: any;
  storeage: any;
  message: any;
  storepincode: any;
  sum: any;
  upStoring: any;
  sumInsure_Quote: any;
  sumInsured_cover: any;
  sumInsured_gender: any;
  sumInsured_city: any;
  sumInsured_state: any;
  sumInsured_email: any;
  healthdata: any = [];
  sumInsured_age: any;
  pushedArray2: any[] = [];
  sumInsured_pincode: any;
  sumInsured_child: any;
  sumInsured_adult: any;
  detailsLogo: any
  detailsSuminsured: any
  detailspremium: any
  exclusion: any;
  summInsured: any;
  specialFeaturee1: any = [];
  storehealthCover: any;
  id: any;
  exclusionDiv: boolean = false;
  featureList: any = [
    {
      name: "Co-pay",
      class: "copay"
    }, {
      name: "Pre-existing Diseases",
      class: "preexistingdiseases"
    }, {
      name: "Recharge Benefit",
      class: "rechargebenifit"
    }, {
      name: "Restoration",
      class: "restoration"
    },

    {
      name: "Ayush/Alternative Treatment Cover",
      class: "ayushalternativetreatmentcover"
    },
    {
      name: "Pre & Post Hospitalisation Expenses",
      class: "preposthospitalisationexpenses"
    },
    {
      name: "Health Checkup",
      class: "healthcheckup"
    },
    {
      name: "Pre & Post Hospitalisation Expenses",
      class: "preposthospitalisationexpenses"
    },
    {
      name: "Pre Hospitalisation Cover",
      class: "prehospitalisationcover"
    },
    {
      name: "Post Hospitalisation Cover",
      class: "posthospitalisationcover"
    },
    {
      name: "OPD Benefit",
      class: "opdbenefit"
    },
    {
      name: "Room Rent",
      class: "roomrent"
    },
    {
      name: "ICU Charges",
      class: "ICU Charges"
    },
    {
      name: "Worldwide Emergency Hospitalisation",
      class: "worldwideemergencyhospitalisation"
    },
    {
      name: "International Treatments",
      class: "internationaltreaments"
    }, {
      name: "Day Care Treatments",
      class: "daycaretreatments"
    }, {
      name: "No Claim Bonus",
      class: "noclaimbonus"
    }, {
      name: "Ambulance Cover",
      class: "ambulancecover"
    }, {
      name: "Emergency Domestic Evacuation",
      class: "emergencydomesticevacuation"
    },
    {
      name: "Second Medical Opinion",
      class: "secondmedicalopinion"
    },
    {
      name: "Domicillary Hospitalisation",
      class: "domicillaryhospitalisation"
    },
    {
      name: "Organ Donor Expenses",
      class: "organdonorexpenses"
    },
    {
      name: "Maternity Cover",
      class: "maternitycover"
    },
    {
      name: "Maternity Cover Waiting",
      class: "maternitycoverwaiting"
    },
    {
      name: "Reduction of Maternity Waiting Period",
      class: "reductionofmaternirywaitingperiod"
    },
    {
      name: "New Born Cover",
      class: "newborncover"
    },
    {
      name: "New Born Vaccination",
      class: "newbornvaccination"
    },
    {
      name: "Animal Bite Cover",
      class: "animalbitecover"
    },

    {
      name: "Hospital Cash",
      class: "hospitalcash"
    },
    {
      name: "Health & Wellness Discounts",
      class: "maternitycover"
    },
    {
      name: "Medical Test",
      class: "medicaltest"
    },
    {
      name: "Diabetes Cover",
      class: "diabetescover"
    },
    {
      name: "Dialysis Expenses",
      class: "dialysisexpenses"
    },
    {
      name: "Personal Accident Cover",
      class: "personalaccidentcover"
    },
    {
      name: "Dental OPD",
      class: "dentalopd"
    },
    {
      name: "Opthamlic OPD",
      class: "opthamlicopd"
    },

    {
      name: "Total Disability Cover",
      class: "totaldisabilitycover"
    },
    {
      name: "Bariatric Surgery",
      class: "bariatricsurgery"
    },
    {
      name: "Deductible",
      class: "deductible"
    },
    {
      name: "Terminal Illness Cover",
      class: "terminalillness"

    }
  ]

  checkboxesArray = [
    {
      id: "zd",
      name: "Restoration",
      code: "HF006"
    },
    {
      id: "cb1",
      name: "Ayush / Alternate Treatments",
      code: "HF007"
    }, {
      id: "cb2",
      name: "OPD Cover",
      code: "HF012"
    }, {
      id: "cb3",
      name: "Maternity Cover",
      code: "HF024"
    }, {
      id: "consume",
      name: "Diabetic Cover",
      code: "",
    }, {
      id: "key",
      name: "Critical Illness Add-on",
      code: "",
    },
  ]
  termArray = [{
    id: 'term1',
    name: '1 year'
  },

  {
    id: 'term2',
    name: '2 years'
  },
  {
    id: 'term1',
    name: '3 year3'
  },
  ]

  insurersArray = [
    {
      id: 'Rs',
      name: 'Royal Sundaram',
      company_code: 'G009',
    },
    {
      id: 'Am',
      name: 'Appoloo Munich',
      company_code: 'G016',
    },

    {
      id: 'Ab',
      name: 'Aditya Birla',
      company_code: 'G028',
    },
    {
      id: 'HE',
      name: 'HDFC ERGO',
      company_code: 'G012',
    },
    {
      id: 'Mc',
      name: 'Manipal Cigna',
      company_code: 'G027',
    },
    {
      id: 'Rl',
      name: 'Religare',
      company_code: 'G025',
    },

    {
      id: 'st',
      name: 'Star',
      company_code: 'G015'
    }
  ]

  addDetails = {
    device: "Desktop",
    _csrfToken: "",
    header_code_id: "",
    header_code_desc: "",
    quote_no: "",
    sum_insured: 500000,
    gender: "",
    age: "",
    city: "",
    state: "",
    mobile: "",
    email: "",
    utm_campaign: "",
    utm_source: "",
    term: "1",
    pincode: "",
    cover: "",
    adult: "",
    child: ""
  }
  editDetails = {
    device: "Desktop",
    _csrfToken: "",
    header_code_id: "",
    header_code_desc: "",
    quote_no: "",
    sum_insured: "",
    gender: "",
    age: "",
    city: "",
    state: "",
    mobile: "",
    email: "",
    utm_campaign: "",
    utm_source: "",
    term: "1",
    pincode: "",
    cover: "",
    adult: "",
    child: ""
  }
  exclusionArray: any = [];
  sumDeclared: any;

  suminsured = [
    {
      name: ' ₹ 3 Lakhs - 3.5 Lakhs',
      value: '300000'
    },
    {
      name: ' ₹ 4 Lakhs - 4.5 Lakhs',
      value: '400000'
    },

    {
      name: '  ₹ 6 Lakhs - 6.5 Lakhs',
      value: '600000'
    },
    {
      name: ' ₹ 7 Lakhs - 7.5 Lakhs',
      value: '700000'
    },
    {
      name: '₹ 8 Lakhs - 8.5 Lakhs',
      value: '800000'
    },
    {
      name: '₹ 9 Lakhs - 9.5 Lakhs',
      value: '900000'
    },
    {
      name: '₹ 10 Lakhs - 10.5 Lakhs',
      value: '1000000'
    },
    {
      name: '₹ 11 Lakhs - 11.5 Lakhs',
      value: '1100000'
    },
    {
      name: '₹ 12 Lakhs - 12.5 Lakhs',
      value: '1200000'
    },
    {
      name: '₹ 13 Lakhs - 13.5 Lakhs',
      value: '1300000'
    },
    {
      name: '₹ 14 Lakhs - 14.5 Lakhs',
      value: '1400000'
    },
    {
      name: '₹ 15 Lakhs - 15.5 Lakhs',
      value: '1500000'
    },
    {
      name: '₹ 16 Lakhs - 16.5 Lakhs',
      value: '1600000'
    },
    {
      name: '₹ 17 Lakhs - 17.5 Lakhs',
      value: '1700000'
    },
    {
      name: ' 18 Lakhs - 18.5 Lakhs',
      value: '1800000'
    },
    {
      name: '₹ 19 Lakhs - 19.5 Lakhs',
      value: '1900000'
    },
    {
      name: '₹ 20 Lakhs - 20.5 Lakhs',
      value: '2000000'
    },
    {
      name: '₹ 21 Lakhs - 21.5 Lakhs',
      value: '2100000'
    },
    {
      name: '₹ 22 Lakhs - 22.5 Lakhs',
      value: '2200000'
    },
    {
      name: '₹ 23 Lakhs - 23.5 Lakhs',
      value: '2300000'
    },
    {
      name: '₹ 24 Lakhs - 24.5 Lakhs',
      value: '2400000'
    },
    {
      name: '₹ 25 Lakhs - 25.5 Lakhs',
      value: '2500000'
    },
    {
      name: '₹ 30 Lakhs - 30.5 Lakhs',
      value: '3000000'
    },
    {
      name: '₹ 40 Lakhs - 40.5 Lakhs',
      value: '4000000'
    },
    {
      name: '₹ 50 Lakhs - 50.5 Lakhs',
      value: '5000000'
    }, {
      name: '₹ 60 Lakhs - 60.5 Lakhs',
      value: '6000000'
    }, {
      name: '₹ 70 Lakhs - 70.5 Lakhs',
      value: '7000000'
    }, {
      name: '₹ 75 Lakhs - 75.5 Lakhs',
      value: '7500000'
    },
    {
      name: '₹ 1 Crore',
      value: '10000000'
    }, {
      name: '₹ 1.5 Crore',
      value: '15000000'
    }, {
      name: '₹ 2 Crore',
      value: '20000000'
    },]
  attr: any;
  getdata: any;
  ngOnInit() {


    this.route.queryParams.subscribe((params) => {

      this.id = params['id']


      if (this.id == 'add' || this.id == 'skip' || this.id == 'proposal') {

        this.addData = true;
        this.storing = JSON.parse(localStorage.getItem('user') || '[]');
        this.healthCover = this.storing.healthCover;

        this.addDetails.sum_insured = this.storing.sum_insured;

        this.addDetails.email = this.storing.email;
        this.addDetails.gender = this.storing.gender;
        this.addDetails.pincode = this.storing.pincode;
        this.addDetails.mobile = this.storing.mobile;

        this.addDetails.quote_no = this.storing.quote_no;


        this.addDetails.city = this.storing.city;

        this.addDetails.child = this.storing.child;
        this.addDetails.state = this.storing.state;

        this.addDetails.cover = this.storing.cover;

        this.addDetails.age = this.storing.age;
        this.addDetails.adult = this.storing.adult;



      } else if (this.id == 'update') {
        this.editData = true;
        this.upStoring = JSON.parse(localStorage.getItem('user') || '[]');

        this.healthCover = this.upStoring.healthCover;

        this.editDetails.quote_no = this.upStoring.quote_no;

        this.editDetails.cover = this.upStoring.cover;
        this.editDetails.gender = this.upStoring.gender;

        this.editDetails.city = this.upStoring.city;
        this.editDetails.state = this.upStoring.state;
        this.editDetails.age = this.upStoring.age;

        this.editDetails.sum_insured = this.upStoring.sum_insured;

        this.editDetails.pincode = this.upStoring.pincode;
        this.editDetails.child = this.upStoring.child;

        this.editDetails.adult = this.upStoring.adult;
        this.editDetails.mobile = this.addDetails.mobile;

        this.editDetails.email = this.addDetails.email;
        this.editDetails.term = this.addDetails.mobile;

        this.editDetails.term = this.upStoring.term;
        this.id = params["id"];
      }


    });

    this.getHealthquotesData();


  }

  compareFeaturesList() {

  }

  closePopup() {
    this.detailsDiv = false;
  }
  // fixedToNumber(){

  // }

  update(sumInsured) {

    if (this.id == "add") {


      let data = {
        quote_no: this.addDetails.quote_no,
        sum_insured: sumInsured,
        age: this.addDetails.age,
        city: this.addDetails.city,
        state: this.addDetails.state,
        term: 1,
        cover: this.addDetails.cover,
        adult: this.addDetails.adult,
        child: this.addDetails.child,
        pincode: this.addDetails.pincode,
        healthGender: this.addDetails.gender,
      }
      this.editserv.updateHealthQuotes(data).subscribe((store) => {

      })
      this.healthquote.gethealthQuotes(this.addDetails).subscribe((res) => {
        this.quotesArray = res['results'].response;
        this.message = res['results'].message
        console.log(this.quotesArray)
        this.quotesArray2 = this.quotesArray.slice();
        this.responsePlan = this.quotesArray2.length
        this.quotesArray.map((e) => {
          e.newArray = [];

          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }

        })
      }
      )


    }


    else if (this.id == "update") {



      let data = {
        quote_no: this.editDetails.quote_no,
        sum_insured: sumInsured,
        age: this.editDetails.age,
        city: this.editDetails.city,
        state: this.editDetails.state,
        term: 1,
        cover: this.editDetails.cover,
        adult: this.editDetails.adult,
        child: this.editDetails.child,
        pincode: this.editDetails.pincode,
        healthGender: this.editDetails.gender,
      }

      this.editserv.updateHealthQuotes(data).subscribe((store) => {

      })

      this.healthquote.gethealthQuotes(this.editDetails).subscribe((res) => {

        this.quotesArray = res['results'].response;
        this.message = res['results'].message;
        this.sidata = res['results'].sumInsured;

        this.quotesArray2 = this.quotesArray.slice();
        this.responsePlan = this.quotesArray2.length;
        this.quotesArray.map((e) => {
          e.newArray = [];


          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }

        })
      }
      )
    }
  }


  findFeatures() {
    this.featuresList = true;
    this.showExclusion = false;
  }
  comparePlan() {

    this.compareplan = true;

    // this.pushAray.map((e) => {

    //   e.newArray = e.newArray.filter((ele) => {
    //     for (let i = 0; i < this.featureList.length; i++) {
    //       if (this.featureList[i].name == ele.title) {

    //         return false;
    //       } else {
    //         return true;
    //       }
    //     }
    //   })


    // })


    // this.router.navigate(['hommodule/one/comparePlan'])
  }

  HealthcoverChecked(value, i, code) {

    if (value.target.checked == true) {
      this.pushedArray2.push(code);

    }
    else {
      for (let i = 0; i < this.pushedArray2.length; i++) {
        if (this.pushedArray2[i].id == code.id) {
          this.pushedArray2.splice(i, 1);
        }
      }
    }
    this.changeFilter();
  }

  changeFilter() {
    this.quotesArray2 = this.quotesArray.filter((e) => {
      for (let c = 0; c < this.pushedArray2.length; c++) {
        let flag = false;
        const pEle = this.pushedArray2[c];
        for (let i = 0; i < e.SpecialFeatureLists.length; i++) {
          if (e.SpecialFeatureLists[i].code == pEle.code) {
            flag = true;
          }
        }
        if (!flag) {
          return false;
        }
      }
      for (let c = 0; c < this.pushedArrayInsurer.length; c++) {
        const pEle = this.pushedArrayInsurer[c];
        if (e.CompanyDetails.company_code != pEle.company_code) {
          return false;
        }
      }
      return true;
    })

    //done
  }

  checkInsurer(value, i, code) {
    if (value.target.checked == true) {
      this.pushedArrayInsurer.push(code);
    }
    else {
      for (let i = 0; i < this.pushedArrayInsurer.length; i++) {
        if (this.pushedArrayInsurer[i].company_code == code.company_code) {
          this.pushedArrayInsurer.splice(i, 1);
        }
      }
    }
    this.changeFilter();
  }


  removecard(k) {

    this.pushAray.splice(k, 1);

    for (let j = 0; j < this.quotesArray.length; j++) {

      if (this.quotesArray[j].id == k.id) {
        console.log(document.getElementById('compare' + j));
        (<HTMLInputElement>document.getElementById('compare' + j)).checked = false;
      }
    }
    if (this.pushAray.length >= 2) {
      document.getElementById('compareButton').style.display = "block";
    }
    else if (this.pushAray.length < 1) {
      document.getElementById('compareButton').style.display = "none";

    }
  }

  compareCard(id, j, e) {


    let data = document.getElementById('compareButton')



    if (e.target.checked == true) {
      this.showCard = true;

      this.pushAray.push(id);



      if (this.pushAray.length >= 2) {
        document.getElementById('compareButton').style.display = "block";


      }

      else if (this.pushAray.length < 1) {

        document.getElementById('compareButton').style.display = "none";

      }

    }
    else {
      this.pushAray.splice(id, 1);

      if (this.pushAray.length >= 2) {
        document.getElementById('compareButton').style.display = "block"
        // data.setAttribute('disabled', 'false');/


      }
      else if (this.pushAray.length < 1) {
        document.getElementById('compareButton').style.display = "none"
        // data.setAttribute('disabled', 'true')

      }

    }


    //   for (var i = 0; i <= this.quotesArray.length; i++) {
    //     // if (e.target.checked == true){
    //     this.cardCompare = true;

    //     // }
    //   }
    // }
    // else {
    //   this.cardCompare = false;
    // }



  }


  backTOquation() {
    this.router.navigate(['/health-insurance/quotes'])
  }



  // checkgender() {
  //     if (this.updateForm.get('adult').value == "one" && this.updateForm.get('child').value == 0) {
  //       // console.log(healthCover)
  //       this.healthCover = '1A';

  //     }
  //     else if (this.updateForm.get('adult').value == "two" && this.updateForm.get('child').value == 0) {


  //       this.healthCover = '2A';
  //     }

  //     else if (this.updateForm.get('adult').value == "one" && this.updateForm.get('child').value == 1) {


  //       this.healthCover = '1A1C';
  //     }

  //     else if (this.updateForm.get('adult').value == "two" && this.updateForm.get('child').value == 1) {


  //       this.healthCover = '2A1C';
  //     }


  //   }

  updateDetails(e) {
    this.router.navigate(['/health-insurance/quotes/edit'],
      {
        // queryParams: this.addDetails,
      });

    this.openEdit = true;

  }


  buyBima(i, event, url, payload) {
    console.log(event)
    event.preventDefault()
    this.router.navigate(['/health-insurance/quotes/proposal'])
    console.log(url, payload)
    this.healthdata = localStorage.setItem('proposal', JSON.stringify(i))
    console.log(this.healthdata)
    this.healthquote.getProposal(url, payload).subscribe((res) => {
      console.log(res)
    })

  }

  getHealthquotesData() {

    if (this.id == "update") {

      this.healthquote.gethealthQuotes(this.editDetails).subscribe((res) => {

        this.quotesArray = res['results'].response;
        this.message = res['results'].message;
        this.quotesArray2 = this.quotesArray.slice();

        console.log(this.quotesArray2)
        this.responsePlan = this.quotesArray2.length;
        this.quotesArray.map((e) => {

          e.newArray = [];
          e.url = "";
          e.middleSection = [];
          if (e.productDetails.product_code == "HPRS02") {
            e.url = "https://www.quickbima.com/api/royal-sundarams/get-premium.json",

              e.middleSection = [{
                title: "Hospital Cash",
                text: "Get Hospital cash benefit of  2,000 /day for an additional premium of",
              },
              {
                title: "Opt for a Top-up Plan and avail discount on your premium",
                text: "Top-up plans would have lower premium and offer higher coverage."
              }
              ]

          }
          else if (e.productDetails.product_code = "HPAM05") {
            e.url = "https://www.quickbima.com/api/cigna-ttks/get-premium.json",

              e.middleSection = [{
                title: "Portability",
                text: "Do you want to port your existing insurance?",
              },
              {
                title: "Hospital Cash",
                text: "Hospital Cash Benefit provides a daily hospital cash in fixed amount if the insured is hospitalized due to accident or illness."
              },
              {
                title: "Critical Illness",
                text: "Critical illness give a lump sum amount equal to Sum Insured in case of first diagnosis of the covered critical illnesses. It protect the insured against financial loss in the event of a terminal illness."
              },
              {
                title: "Pro Health-Cumulative Bonus Booster",
                text: "Additional Sum Insured of 25% will be added as cumulative bonus at the time of renewal in case there is no claim in the expiring policy"
              }
              ]

          }


          else if (e.productDetails.product_code == "G025") {
            e.url = "https://www.quickbima.com/api/health-rates/get-premium.json"

          }
          else if (e.productDetails.product_code == "HFC001") {
            e.url = "https://www.quickbima.com/api/cigna-ttks/get-premium.json",

              e.middleSection = [{
                title: "Portability",
                text: "Do you want to port your existing insurance?",
              },
              {
                title: "Critical Illness",
                text: "Critical illness give a lump sum amount equal to Sum Insured in case of first diagnosis of the covered critical illnesses. It protect the insured against financial loss in the event of a terminal illness."
              },
              {
                title: "Pro Health-Cumulative Bonus Booster",
                text: "Additional Sum Insured of 25% will be added as cumulative bonus at the time of renewal in case there is no claim in the expiring policy"
              },]
          }
          else if (e.productDetails.product_code == "HFC002") {
            e.url = "https://www.quickbima.com/api/cigna-ttks/get-premium.json",

              e.middleSection = [{
                title: "Portability",
                text: "Do you want to port your existing insurance?",
              },
              {
                title: "Critical Illness",
                text: "Critical illness give a lump sum amount equal to Sum Insured in case of first diagnosis of the covered critical illnesses. It protect the insured against financial loss in the event of a terminal illness."
              },
              {
                title: "Pro Health-Cumulative Bonus Booster",
                text: "Additional Sum Insured of 25% will be added as cumulative bonus at the time of renewal in case there is no claim in the expiring policy"
              },]


          }
          else if (e.productDetails.product_code == "HFR002") {
            e.url = "https://www.quickbima.com/api/health-rates/get-premium.json",

              e.middleSection = [{
                title: "For Care with Unlimited Recharge",
                text: "If due to claims made, you ever exhaust your health cover, we recharge the entire sum insured of your policy for you, in the policy year. All this at no extra cost",
              },
              {
                title: "Add No Claim Bonus Super",
                text: "No claim Bonus Super is a benefit where the insured gets an increase of 50% in the sum insured for every claim free year, up to the maximum of 100% of the sum insured."

              },
              ]
          }
          else if (e.productDetails.product_code == "HPAB031") {
            e.url = "https://www.quickbima.com/api/aditya-birlas/get-premium-diamond.json",

              e.middleSection = [{
                title: "Super NCB",
                text: "Receive a Super NCB of 50% of your Sum Insured for every claim free year. Maximum up to 100%"

              },
              {
                title: "Unlimited Reload of Sum Insured",
                text: "Sum insured shall be reinstated unlimited times in a policy year if you run out cover due to claims."
              },
              {
                title: "Any Room Upgrade",
                text: "Choose any room in hospital without any restriction?"
              }
              ]
          }
          else if (e.productDetails.product_code == "HFH003") {
            e.middleSection = [{
              title: "Critical Illness",
              text: "Double Sum Insured For Critical illness."
            },
            {
              title: "Waiver of Room Rent Sub-limits",
              text: ""
            },

            ]
          }


          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }
          // console.log(e.newArray);
        })
      }
      )
    }
    else {

      this.healthquote.gethealthQuotes(this.addDetails).subscribe((res) => {

        this.quotesArray = res['results'].response;
        this.quotesArray2 = this.quotesArray.slice();
        this.message = res['results'].message;




        this.responsePlan = this.quotesArray2.length
        this.quotesArray = res['results'].response;

        this.quotesArray2.map((e) => {
          e.newArray = [];
          e.url = "";
          e.middleSection = [];
          if (e.productDetails.product_code == "HPRS02") {
            e.url = "https://www.quickbima.com/api/royal-sundarams/get-premium.json",
              e.payload = {
                // cover: 
                // age: 19
                // buy_online_code: ROYAL-SUPREME
                // sum_insured: 500000
                // city: Alwar
                // term: 1
                // name: 
                // mobile: 9999999999
                // email: test@quickbima.com
                // opt_topup_opted: No
                // deductible_amount: 
                // hospital_benifit: on
                // quote_no: QB1564835502739870904
                // product_id: 99
              }
            e.middleSection = [{
              title: "Hospital Cash",
              text: "Get Hospital cash benefit of  2,000 /day for an additional premium of",
            },
            {
              title: "Opt for a Top-up Plan and avail discount on your premium",
              text: "Top-up plans would have lower premium and offer higher coverage."
            }
            ]

          }
          else if (e.productDetails.product_code = "HPAM05") {
            e.url = "https://www.quickbima.com/api/cigna-ttks/get-premium.json",
              e.payload = {
                gender: this.addDetails.gender,
                pincode: this.addDetails.pincode,
                quote_no: this.addDetails.quote_no,
                sum_insured: this.addDetails.sum_insured,
                term: 1,
                product_id: e.productDetails.id,
                product_code: e.productDetails.product_code,
                cover: this.addDetails.cover,
                age: this.addDetails.age,
                mobile: this.addDetails.mobile,
                state: this.addDetails.state,
                city: this.addDetails.city,
                tax_calc_method: e.productDetails.tax_calc_method
              }

            e.middleSection = [{
              title: "Portability",
              text: "Do you want to port your existing insurance?",
            },
            {
              title: "Hospital Cash",
              text: "Hospital Cash Benefit provides a daily hospital cash in fixed amount if the insured is hospitalized due to accident or illness."
            },
            {
              title: "Critical Illness",
              text: "Critical illness give a lump sum amount equal to Sum Insured in case of first diagnosis of the covered critical illnesses. It protect the insured against financial loss in the event of a terminal illness."
            },
            {
              title: "Pro Health-Cumulative Bonus Booster",
              text: "Additional Sum Insured of 25% will be added as cumulative bonus at the time of renewal in case there is no claim in the expiring policy"
            }
            ]

          }


          else if (e.productDetails.product_code == "G025") {
            e.url = "https://www.quickbima.com/api/health-rates/get-premium.json"

          }
          else if (e.productDetails.product_code == "HFC001") {
            e.url = "https://www.quickbima.com/api/cigna-ttks/get-premium.json",
              e.payload = {
                gender: this.addDetails.gender,
                pincode: this.addDetails.pincode,
                quote_no: this.addDetails.quote_no,
                sum_insured: this.addDetails.sum_insured,
                term: 1,
                product_id: e.productDetails.id,
                product_code: e.productDetails.product_code,
                cover: this.addDetails.cover,
                age: this.addDetails.age,
                mobile: this.addDetails.mobile,
                state: this.addDetails.state,
                city: this.addDetails.city,
                tax_calc_method: e.productDetails.tax_calc_method
              }
            e.middleSection = [{
              title: "Portability",
              text: "Do you want to port your existing insurance?",
            },
            {
              title: "Critical Illness",
              text: "Critical illness give a lump sum amount equal to Sum Insured in case of first diagnosis of the covered critical illnesses. It protect the insured against financial loss in the event of a terminal illness."
            },
            {
              title: "Pro Health-Cumulative Bonus Booster",
              text: "Additional Sum Insured of 25% will be added as cumulative bonus at the time of renewal in case there is no claim in the expiring policy"
            },]
          }
          else if (e.productDetails.product_code == "HFC002") {
            e.url = "https://www.quickbima.com/api/cigna-ttks/get-premium.json",
              e.payload = {
                gender: this.addDetails.gender,
                pincode: this.addDetails.pincode,
                quote_no: this.addDetails.quote_no,
                sum_insured: this.addDetails.sum_insured,
                term: 1,
                product_id: e.productDetails.id,
                product_code: e.productDetails.product_code,
                cover: this.addDetails.cover,
                age: this.addDetails.age,
                mobile: this.addDetails.mobile,
                state: this.addDetails.state,
                city: this.addDetails.city,
                tax_calc_method: e.productDetails.tax_calc_method
              }
            e.middleSection = [{
              title: "Portability",
              text: "Do you want to port your existing insurance?",
            },
            {
              title: "Critical Illness",
              text: "Critical illness give a lump sum amount equal to Sum Insured in case of first diagnosis of the covered critical illnesses. It protect the insured against financial loss in the event of a terminal illness."
            },
            {
              title: "Pro Health-Cumulative Bonus Booster",
              text: "Additional Sum Insured of 25% will be added as cumulative bonus at the time of renewal in case there is no claim in the expiring policy"
            },]


          }
          else if (e.productDetails.product_code == "HFR002") {
            e.url = "https://www.quickbima.com/api/health-rates/get-premium.json",
              e.payload = {
                gender: this.addDetails.gender,
                pincode: this.addDetails.pincode,
                quote_no: this.addDetails.quote_no,
                sum_insured: this.addDetails.sum_insured,
                term: 1,
                product_id: e.productDetails.id,
                product_code: e.productDetails.product_code,
                cover: this.addDetails.cover,
                age: this.addDetails.age,
                mobile: this.addDetails.mobile,
                state: this.addDetails.state,
                city: this.addDetails.city,
                tax_calc_method: e.productDetails.tax_calc_method
              }
            e.middleSection = [{
              title: "For Care with Unlimited Recharge",
              text: "If due to claims made, you ever exhaust your health cover, we recharge the entire sum insured of your policy for you, in the policy year. All this at no extra cost",
            },
            {
              title: "Add No Claim Bonus Super",
              text: "No claim Bonus Super is a benefit where the insured gets an increase of 50% in the sum insured for every claim free year, up to the maximum of 100% of the sum insured."

            },
            ]
          }
          else if (e.productDetails.product_code == "HPAB031") {
            e.url = "https://www.quickbima.com/api/aditya-birlas/get-premium-diamond.json",
              e.payload = {
                gender: this.addDetails.gender,
                pincode: this.addDetails.pincode,
                quote_no: this.addDetails.quote_no,
                sum_insured: this.addDetails.sum_insured,
                term: 1,
                product_id: e.productDetails.id,
                product_code: e.productDetails.product_code,
                cover: this.addDetails.cover,
                age: this.addDetails.age,
                mobile: this.addDetails.mobile,
                state: this.addDetails.state,
                city: this.addDetails.city,
                tax_calc_method: e.productDetails.tax_calc_method
              }
            e.middleSection = [{
              title: "Super NCB",
              text: "Receive a Super NCB of 50% of your Sum Insured for every claim free year. Maximum up to 100%"

            },
            {
              title: "Unlimited Reload of Sum Insured",
              text: "Sum insured shall be reinstated unlimited times in a policy year if you run out cover due to claims."
            },
            {
              title: "Any Room Upgrade",
              text: "Choose any room in hospital without any restriction?"
            }
            ]
          }
          // else if (e.productDetails.product_code == "HFH003") {

          //   e.payload = {
          //     gender: this.addDetails.gender,
          //     pincode: this.addDetails.pincode,
          //     quote_no: this.addDetails.quote_no,
          //     sum_insured: this.addDetails.sum_insured,
          //     term: 1,
          //     product_id: e.productDetails.id,
          //     product_code: e.productDetails.product_code,
          //     cover: this.addDetails.cover,
          //     age: this.addDetails.age,
          //     mobile: this.addDetails.mobile,
          //     state: this.addDetails.state,
          //     city: this.addDetails.city,
          //     tax_calc_method: e.productDetails.tax_calc_method
          //   }
          //   e.middleSection = [{
          //     title: "Critical Illness",
          //     text: "Double Sum Insured For Critical illness."
          //   },
          //   {
          //     title: "Waiver of Room Rent Sub-limits",
          //     text: ""
          //   },

          //   ]
          // }

          e.totalFeatureList = this.featureList.slice();

          e.totalFeatureList.map((m) => {
            let desc = e.SpecialFeatureLists.filter((f) => {
              // if (f.title == m.name) {
              //   console.log('gud')
              //   console.log(f.title)
              //   console.log(f.title == m.name)
              return f.title == m.name
              // }

            })
            // console.log(e.totalFeatureList)
            if (desc.length) {
              m.description = desc[0].description;



            }
            else {
              m.description = "";
            }
          })

          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }

        })

        console.log(this.quotesArray2)




        // console.log(this.quotesArray.CashlessHospitalLists)

        // for (let i = 0; i<=this.quotesArray[i].CashlessHospitalLists.length; i ++){
        //   console.log(this.quotesArray[i].CashlessHospitalLists)
        //   this.cashlessHospital = this.quotesArray[i].CashlessHospitalLists;
        // this.hospitalcount = this.cashlessHospital.length
        // }


        this.quotesArray.map((e, index) => {
          e['id'] = index;
          this.brochure = e.productDetails.brochure;
          this.sumInsured = e.sumInsured;



          this.specialFeatureList = e.SpecialFeatureLists
          this.cashlessHospital = e.CashlessHospitalLists
          this.hospitalcount = this.cashlessHospital.length

          e.Cashlesslist = [];
          e.Cashlesslist.push(this.cashlessHospital)

          e.newCount = [];
          e.newCount.push(this.hospitalcount);





          e.newArray = [];
          // e.selectedcode = [];
          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }

        })
      }
      )
      this.loader = false;
    }

    // }else{






  }

  downloadPdf(i) {
    this.pdfConvertor = i.productDetails.brochure
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.pdfConvertor);
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();

  }

  showDetails(i) {

    this.exclusionArray = i.productDetailListsApp.exclusion;
    this.specialFeature = i.productDetailListsApp.coveredFeatures;
    this.specialFeatures = i.productDetailListsApp.specialFeatures;
    // if(this.specialFeatures.length >=4 && this.specialFeatures.length <=8){
    this.specialFeaturee = this.specialFeatures.slice(0, 2);
    // }
    this.specialFeaturee1 = this.specialFeatures.slice(2, 6);





    // this.router.navigate(['/homemodule/one/details'], {queryParams: {data: this.specialFeatureList}})
    this.detailsDiv = true;
    this.featuresList = true;
    this.showExclusion = false;
    this.detailsLogo = i.CompanyDetails.logo;
    this.detailsSuminsured = i.sumInsured;
    this.detailspremium = i.premiumDetails.finalPremium;



    this.policyBrochure = i.productDetails.brochure;
    this.exclusion = i.productDetailListsApp.exclusion;

  }

  removeFeatureCols(p) {
    this.pushAray.splice(p, 1)
  }

  downloadPolicy(i) {

    // this.pdfConvertor = i.productDetails.brochure
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.policyBrochure);
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  findExclusion(i) {

    this.showExclusion = true;
    this.featuresList = false;
    // document.getElementById('policyexclusions').style.visibility = 'visible';

  }

}

