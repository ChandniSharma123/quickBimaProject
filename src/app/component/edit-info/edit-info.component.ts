import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EditService } from './edit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthQuotesService } from '../health-quotes/health-quotes.service';

import { HealthQuotesComponent } from '../health-quotes/health-quotes.component'

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  updateForm: FormGroup;
  healthCover: string;
  sub: any = [];
  pincode: any = [];
  smInsured: any = [];
  quote: any = [];
  icon: any = [];
  city: any = [];
  state: any = [];
  gender: any = [];
  email: any = [];
  mobile: any = [];
  child: any = [];
  adult: any = [];
  age: any = [];
  ageVar: any=[];
  constructor(private formBuilder: FormBuilder,
    private editServ: EditService, private route: ActivatedRoute, private router: Router,
    private healthquote: HealthQuotesService) { }




  ngOnInit() {
    this.countAge();
    this.updateForm = this.formBuilder.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      pincode: ['', Validators.required],
      adult: ['', Validators.required],
      child: ['', Validators.required],


    })

    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.icon = params['cover']
      this.quote = params['quote_no'];
      this.state = params['state'];
      this.city = params['city'];
      this.gender = params['gender'];
      this.email = params['email'];
      this.mobile = params['mobile'];
      this.smInsured = params['sum_insured'];
      this.adult = params['adult'];
      this.child = params['child'];
      this.age = params['age'];
      this.pincode = params['pincode'];
      console.log(this.quote, this.state, this.city)

      // this.storeParams = params['page'];
      // console.log(this.storeParams)
      // console.log(typeof (this.storeParams))
    });

    this.updateForm.controls['age'].setValue(this.age);
    this.updateForm.controls['gender'].setValue(this.gender);
    this.updateForm.controls['pincode'].setValue(this.pincode);
    this.updateForm.controls['adult'].setValue(this.adult);
    this.updateForm.controls['child'].setValue(this.child);
    console.log(this.updateForm.controls)
  }

  countAge() {
    for (var i = 18; i <= 110; i++) {
      // console.log(i)
      this.ageVar = i
      console.log(typeof(i),typeof(this.ageVar));
      // this.ageVar.push(i);
// console.log(typeof(this.ageVar.push(i)))
    }
  }


  checkCaseForAdult() {


    if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 0) {

      this.healthCover = 'One Adult';

    }
    else if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 1) {


      this.healthCover = 'One Adult,1 Child';
    }

    else if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 2) {


      this.healthCover = 'One Adult,2 Children';
    }

    else if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 3) {


      this.healthCover = 'One Adult,3 Children';
    }

    else if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 4) {


      this.healthCover = 'One Adult,4Children';

    }

    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 0) {


      this.healthCover = 'two Adult';
    }

    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 1) {


      this.healthCover = 'two Adult,1 Child';
    }

    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 2) {


      this.healthCover = 'two Adults,2 Children';
    }

    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 3) {



      this.healthCover = 'two Adults, 3Children';
    }

    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 4) {


      this.healthCover = 'One Adult, 4Children';
    }
    console.log(this.healthCover)

  }

  checkgender() {
    console.log(this.updateForm.get('adult').value);
    console.log(this.updateForm.get('child').value);
    if (this.updateForm.get('adult').value == 1 && this.updateForm.get('child').value == 0) {
      // console.log(healthCover)
      this.icon = '1A';
    }
    else if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 1) {


      this.icon = '1A1C';
    }

    else if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 2) {


      this.icon = '1A2C';
    }

    else if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 3) {


      this.icon = '1A3C';
    }

    else if (this.updateForm.get('adult').value == "1" && this.updateForm.get('child').value == 4) {


      this.icon = '1A4C';
    }
    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 0) {


      this.icon = '2A';
    }
    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 1) {


      this.icon = '2A1C';
    }

    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 2) {


      this.icon = '2A2C';
    }
    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 3) {


      this.icon = '2A3C';
    }
    else if (this.updateForm.get('adult').value == "2" && this.updateForm.get('child').value == 4) {


      this.icon = '2A4C';
    }

  }

  routeonHealthPage() {
    this.router.navigate(['/homemodule/one'])
  }
  updateeditDetails() {
    //console.log(this.updateForm)
    this.checkgender();
    this.checkCaseForAdult();
    //console.log(this.icon);
    let data = {
      quote_no: this.quote,
      sum_insured: this.smInsured,
      age: this.updateForm.get('age').value,
      city: this.city,
      state: this.state,
      term: 1,
      cover: this.icon,
      adult: this.updateForm.get('adult').value,
      child: this.updateForm.get('child').value,
      pincode: this.updateForm.get('pincode').value,
      gender: this.updateForm.get('gender').value,
    }

console.log(data)
    // if(this.updateForm.valid){
    this.editServ.updateHealthQuotes(data).subscribe((store) => {
      console.log(store)
      console.log(this.quote, this.city, this.mobile, this.smInsured, this.icon, this.pincode, this.adult, this.child, this.state)
      this.router.navigate(['/homemodule/one'],
        {
          queryParams: {
            id: 'update',
            healthCover: this.healthCover,
            quote: data.quote_no, age: data.age, cover: data.cover, sum_insured: data.sum_insured,
            city: data.city, state: data.state, gender: data.gender,
            mobile: this.mobile, email: this.email, child: data.child,
            adult: data.adult, pincode: data.pincode
          }
        })

    })

    // this.router.navigate(['/homemodule'])
    //  getHealthquotesData();

    // let sub = {

    //   "sum_insured": 500000,
    //   "quote_no": this.quote,
    //   "module": "HealthPlans",
    //   "insurance_type": "Health Plans",
    //   "pincode": this.updateForm.get('pincode').value,
    //   "name": "Hfhhfnhjhnfhg",
    //   "email": this.email,
    //   "mobile": this.mobile,
    //   "city": this.city,
    //   "state": this.state,
    //   "source_url": "",
    //   "utm_source": "",
    //   "utm_medium": "",
    //   "utm_medium_m": "",
    //   "utm_medium_d": "",
    //   "utm_campaign": "",
    //   "utm_keyword": "",
    //   "status": 1,
    //   "cron_mail_status": 0,
    //   "cover": this.healthCover,
    //   "adult": this.updateForm.get('adult').value,
    //   "child": this.updateForm.get('child').value,

    //   "gender": this.updateForm.get('gender').value,
    //   "age": this.updateForm.get('age').value,
    //   "dob_date": "",
    //   "dob_month": "",
    //   "dob_year": "",
    //   "term": 1,
    //   "requestTime": 1560424458,
    //   "header_code_id": 2,
    //   "header_code_desc": "Quotation Taken",
    //   "_csrfToken": ""

    // }

    //   this.healthquote.gethealthQuotes(sub).subscribe((d)=>{console.log(d)})
    //  this.router.navigate(['/homemodule/one'])

    // updateeditDetails();
  }
}
