import { Component, OnInit } from '@angular/core';
import { HealthQuotesService } from '../health-quotes/health-quotes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditService } from '../edit-info/edit.service';
import { BlockingProxy } from 'blocking-proxy';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-health-quotes',
  templateUrl: './health-quotes.component.html',
  styleUrls: ['./health-quotes.component.css']
})


export class HealthQuotesComponent implements OnInit {
  quotesArray: any;
  loader: boolean = true;
  showExclusion: boolean = false;
  sumInsured: any;
  storeComparedData: any;
  cLogo: any;
  savedtitle: any;
  storecompareTitle: any = [];;
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
    private router: Router) { }
  storeParams;
  store: any = [];
  logo: any
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
  message:any;
  storepincode: any
  sum: any;
  sumInsure_Quote: any;
  sumInsured_cover: any;
  sumInsured_gender: any;
  sumInsured_city: any;
  sumInsured_state: any;
  sumInsured_email: any;
  sumInsured_age: any;
  sumInsured_pincode: any;
  sumInsured_child: any;
  sumInsured_adult: any;
  detailsLogo: any
  detailsSuminsured: any
  detailspremium: any
  exclusion: any;
  summInsured: any;
  storehealthCover: any;
  id: any;
  exclusionDiv: boolean = false;
  featureList: any = [
    {
      name: "Co-Pay",
      class: "copay"
    }, {
      name: "Pre-Existing Diseases",
      class: "preexistingdiseases"
    }, {
      name: "Recharge Benefit",
      class: "rechargebenifit"
    }, {
      name: "Restoration",
      class: "restoration"
    },

    {
      name: "Ayush / Alternative Treatment Cover",
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
      name: "Pre Hospitalisation Cover",
      class: "prehospitalisationcover"
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
      name: ' 3 Lakhs - 3.5 Lakhs',
      value: 300000
    },
    {
      name: ' 4 Lakhs - 4.5 Lakhs',
      value: 400000
    },

    {
      name: ' 6 Lakhs - 6.5 Lakhs',
      value: 600000
    },
    {
      name: '   7 Lakhs - 7.5 Lakhs',
      value: 700000
    },
    {
      name: ' 8 Lakhs - 8.5 Lakhs',
      value: 800000
    },
    {
      name: ' 9 Lakhs - 9.5 Lakhs',
      value: 900000
    },
    {
      name: ' 10 Lakhs - 10.5 Lakhs',
      value: 1000000
    },
    {
      name: ' 11 Lakhs - 11.5 Lakhs',
      value: 1100000
    },
    {
      name: ' 12 Lakhs - 12.5 Lakhs',
      value: 1200000
    },
    {
      name: ' 13 Lakhs - 13.5 Lakhs',
      value: 1300000
    },
    {
      name: ' 14 Lakhs - 14.5 Lakhs',
      value: 1400000
    },
    {
      name: ' 15 Lakhs - 15.5 Lakhs',
      value: 1500000
    },
    {
      name: ' 16 Lakhs - 16.5 Lakhs',
      value: 1600000
    },
    {
      name: ' 17 Lakhs - 17.5 Lakhs',
      value: 1700000
    },
    {
      name: ' 18 Lakhs - 18.5 Lakhs',
      value: 1800000
    },
    {
      name: ' 19 Lakhs - 19.5 Lakhs',
      value: 1900000
    },
    {
      name: ' 20 Lakhs - 20.5 Lakhs',
      value: 2000000
    },
    {
      name: ' 21 Lakhs - 21.5 Lakhs',
      value: 2100000
    },
    {
      name: ' 22 Lakhs - 22.5 Lakhs',
      value: 2200000
    },
    {
      name: ' 23 Lakhs - 23.5 Lakhs',
      value: 2300000
    },
    {
      name: ' 24 Lakhs - 24.5 Lakhs',
      value: 2400000
    },
    {
      name: ' 25 Lakhs - 25.5 Lakhs',
      value: 2500000
    },
    {
      name: ' 30 Lakhs - 30.5 Lakhs',
      value: 3000000
    },
    {
      name: ' 40 Lakhs - 40.5 Lakhs',
      value: 4000000
    },
    {
      name: ' 50 Lakhs - 50.5 Lakhs',
      value: 5000000
    }, {
      name: ' 60 Lakhs - 60.5 Lakhs',
      value: 6000000
    }, {
      name: ' 70 Lakhs - 70.5 Lakhs',
      value: 7000000
    }, {
      name: ' 75 Lakhs - 75.5 Lakhs',
      value: 7500000
    },
    {
      name: ' 1 Crore',
      value: 10000000
    }, {
      name: ' 1.5 Crore',
      value: 15000000
    }, {
      name: '2 Crore',
      value: 20000000
    },]
  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.id = params['id']
      this.healthCover = params['healthCover'];
      if (this.id == 'add') {
        console.log(params)
        this.addDetails.sum_insured = params['sumInsured']
        this.addDetails.age = params['age']
        this.addDetails.cover = params['cover']
        this.addDetails.pincode = params['pincode']
        this.addDetails.mobile = params['mobile']
        this.addDetails.email = params['email']
        this.addDetails.city = params['city']
        this.addDetails.gender = params['gender']
        this.addDetails.quote_no = params['quote']
        this.addDetails.state = params['state']
        this.storeChild = params['child'];
        this.storeAdult = params['adult'];
        this.addDetails.adult = params['adult'];
        this.addDetails.child = params['child'];
        this.id = params["id"];
        console.log(params)
      } else if (this.id == 'update') {
        console.log('hii')
        console.log(params)
        this.editDetails.quote_no = params['quote'];
        this.editDetails.cover = params['cover'];
        this.editDetails.gender = params['gender'];
        this.editDetails.city = params['city'];
        this.editDetails.state = params['state'];
        this.editDetails.age = params['age'];
        this.editDetails.sum_insured = params['sum_insured']
        //   this.sumInsured_age = params['age'];
        this.editDetails.pincode = params['pincode'];
        this.editDetails.child = params['child'];
        this.editDetails.adult = params['adult'];
        this.editDetails.mobile = params['mobile'];
        this.editDetails.email = params['email'];
        this.editDetails.term = params['term'];
        this.id = params["id"];
      }

      console.log(this.addDetails);
      console.log(this.editDetails);

    });

    this.getHealthquotesData();


  }

  compareFeaturesList() {
    console.log(this.quotesArray);
  }

  closePopup() {
    this.detailsDiv = false;
  }

  update(sumInsured) {
    console.log(sumInsured);
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
        console.log(store);
      })
      this.healthquote.gethealthQuotes(data).subscribe((res) => {
        this.quotesArray = res['results'].response;
        this.message = res['results'].message

        console.log(this.quotesArray)
        this.responsePlan = this.quotesArray.length
        this.quotesArray.map((e) => {
          e.newArray = [];

          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }
          console.log(e.newArray);
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
        this.message = res['results'].message

        console.log(this.quotesArray)
        this.responsePlan = this.quotesArray.length
        this.quotesArray.map((e) => {
          e.newArray = [];

          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }
          console.log(e.newArray);
        })
      }
      )

    }


    // if(this.updateForm.valid){

  }

  ayushChecked(value ,checked){
    if (value.target.checked == true) {

      this.quotesArray = this.quotesArray.filter((e) => {
        for (let i = 0; i < e.SpecialFeatureLists.length; i++) {
          if (e.SpecialFeatureLists[i].code == 'HF006') {
            return true;
          } else {
            return false;
          }
        }
      })
    }
      else{

      }
  }
  findFeatures(){
    this.featuresList = true;
    this.showExclusion = false;
  }

  restorationchecked(value, checked) {
    console.log(this.quotesArray);
    if (value.target.checked == true) {

      this.quotesArray = this.quotesArray.filter((e) => {
        for (let i = 0; i < e.SpecialFeatureLists.length; i++) {
          if (e.SpecialFeatureLists[i].code == 'HF007') {
            return true;
          } else {
            return false;
          }
        }
      })


      // this.quotesArray.map((e) => {
      //   // e.selectedcode = [];
      //   //  if( e.SpecialFeatureLists[i].code == 'HF006'){
      //   //           e.selectedcode.push(e.SpecialFeatureLists)

      //   //           console.log(e.selectedcode)

      //   //         }
      //   e.SpecialFeatureLists = e.SpecialFeatureLists.filter((ele) => {
      //     if (ele.code == 'HF006') {
      //       e.selectedcode.push(e.SpecialFeatureLists)
      //       console.log(e.SpecialFeatureLists)
      //       console.log(e.selectedcode)
      //     }
      //     else {
      //       // this.quotesArray.pop(e.SpecialFeatureLists)
      //     }
      //   })

      // })

    } else {

    }
    // else {

    // }
  }

  removecard(k) {

    this.pushAray.splice(k, 1);

    for (let j = 0; j < this.quotesArray.length; j++) {

      if (this.quotesArray[j].id == k.id) {
        console.log(document.getElementById('compare' + j));
        (<HTMLInputElement>document.getElementById('compare' + j)).checked = false;
      }
    }
    // this.showCard = false;

  }
  comparePlan() {

    this.compareplan = true;
    // this.pushAray.map((e)=>{

    //     e.SpecialFeatureLists = e.SpecialFeatureLists.filter((ele)=>{
    //       for(let i=0; i<this.featureList.length; i++){      
    //       if(ele.title == this.featureList[i].name){
    //         return false;
    //       }else{
    //         return true;
    //         }
    //       }

    //     })

    // })
    console.log(this.pushAray);

    // this.router.navigate(['hommodule/one/comparePlan'])
  }
  compareCard(id, j, e) {
    console.log(j);
    // document.getElementById('compareButton').style.display = "none"
    let data = document.getElementById('compareButton')
    console.log(id)

    // if(document.getElementById('checker').style.display = "block"){
    //   document.getElementById('compareButton').style.display = "block"
    // }
    // console.log(this.storecompareTitle)
    if (e.target.checked == true) {
      this.showCard = true;

      this.pushAray.push(id);
      console.log(this.pushAray)


      if (this.pushAray.length >= 2) {
        document.getElementById('compareButton').style.display = "block"

        data.setAttribute('disabled', 'false');
        console.log(data.setAttribute)

      }
     
      else {
        document.getElementById('compareButton').style.display = "none"
        data.setAttribute('disabled', 'true')
        console.log(data.setAttribute)
      }

    }
    else {
      this.pushAray.splice(id, 1);

      if (this.pushAray.length >= 2) {
        document.getElementById('compareButton').style.display = "block"
        data.setAttribute('disabled', 'false');


      }
      else {
        document.getElementById('compareButton').style.display = "none"
        data.setAttribute('disabled', 'true')

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
    this.router.navigate(['/homemodule/one'])
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
    this.router.navigate(['/homemodule/one/edit'],
      {
        queryParams: this.addDetails,
      });

    this.openEdit = true;

  }
  getHealthquotesData() {

    // let data = {

    //   "quote_no": this.storequote,
    //   "module": "HealthPlans",
    //   "insurance_type": "Health Plans",
    //   "pincode": this.storepincode,
    //   "name": "Hfhhfnhjhnfhg",
    //   "sum_insured": this.summInsured,
    //   "email": this.storeemail,
    //   "mobile": this.storemobile,
    //   "city": this.storecity,
    //   "state": this.storestate,
    //   "source_url": "",
    //   "utm_source": "",
    //   "utm_medium": "",
    //   "utm_medium_m": "",
    //   "utm_medium_d": "",
    //   "utm_campaign": "",
    //   "utm_keyword": "",
    //   "status": 1,
    //   "cron_mail_status": 0,
    //   "cover": this.storeParams,
    //   "adult": this.storeAdult,
    //   "child": this.storeChild,

    //   "gender": this.storegender,
    //   "age": this.storeage,
    //   "dob_date": "",
    //   "dob_month": "",
    //   "dob_year": "",
    //   "term": 1,
    //   "requestTime": "",
    //   "header_code_id": 2,
    //   "header_code_desc": "Quotation Taken",
    //   "_csrfToken": ""



    // }
    if (this.id == "update") {
      console.log(this.editDetails)
      this.healthquote.gethealthQuotes(this.editDetails).subscribe((res) => {
        console.log(res);
        this.quotesArray = res['results'].response;
        this.message = res['results'].message

        console.log(this.quotesArray)
        this.responsePlan = this.quotesArray.length
        this.quotesArray.map((e) => {
          e.newArray = [];

          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }
          console.log(e.newArray);
        })
      }
      )





    }
    else {
      console.log(this.addDetails)
      this.healthquote.gethealthQuotes(this.addDetails).subscribe((res) => {

        this.quotesArray = res['results'].response;

        this.message = res['results'].message
        console.log(this.quotesArray)



        this.responsePlan = this.quotesArray.length
        this.quotesArray = res['results'].response;
        console.log(this.quotesArray)
        this.quotesArray.map((e) => {
          e.newArray = [];

          for (let i = 0; i < 4; i++) {
            if (e.SpecialFeatureLists[i]) {
              e.newArray.push(e.SpecialFeatureLists[i]);
            }
          }
          console.log(e.newArray);
        })






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
          console.log(e.newArray);
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
    this.specialFeature = i.SpecialFeatureLists;

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

