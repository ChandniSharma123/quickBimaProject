import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { HealthQuotesComponent } from '../health-quotes/health-quotes.component';
import { HealthQuotesService } from '../health-quotes/health-quotes.service';

@Component({
  selector: 'app-home',


  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'QuickBimaDirectory';
  quote_no: any;
  sumInsured: any;
  cover: any;
  healthCover: string;
  pincode: string;
  city: string;
  state: string;
  email: string;
  mobile: string;
  gender: string;
  adult: string;
  child: string;
  age: string;

  getData:any;
  hero: any;

  registerForm: FormGroup;
  submitted = false;
  data = "good";
storeElement = "stored"
  constructor(private router: Router, private formBuilder: FormBuilder, private healthServ: HomeService, private healthquote: HealthQuotesService) { }

  ngOnInit() {
  
    this.registerForm = this.formBuilder.group({
      healthName: ['', Validators.required],
      healthAge: ['', Validators.required],

      healthGender: ['', Validators.required],
      healthEmail: ['', [Validators.required, Validators.email]],
      healthMobile: ['', [Validators.required]],
      // ,Validators.pattern("^((\\+)|(00))[0-9]{6,14}$")],
      healthPincode: ['', Validators.required],
      // oneAdult: ['', Validators.required],
      adult: ['', Validators.required],
      child: ['', Validators.required],
      // minus: [this._value, Validators.required],
      // plus: [this._value, Validators.required],
      // healthCover: ['', Validators.required],

    })

  }


  get f() {

    return this.registerForm.controls;

  }
  keyPress(event: any) {
    const pattern = /[0-9\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }



  checkCaseForAdult() {


    if (this.registerForm.get('adult').value == "week" && this.registerForm.get('child').value == 0) {

      this.healthCover = 'One Adult';

    }
    else if (this.registerForm.get('adult').value == "week" && this.registerForm.get('child').value == 1) {


      this.healthCover = 'One Adult,1 Child';
    }

    else if (this.registerForm.get('adult').value == "week" && this.registerForm.get('child').value == 2) {


      this.healthCover = 'One Adult,2 Children';
    }

    else if (this.registerForm.get('adult').value == "week" && this.registerForm.get('child').value == 3) {


      this.healthCover = 'One Adult,3 Children';
    }

    else if (this.registerForm.get('adult').value == "week" && this.registerForm.get('child').value == 4) {


      this.healthCover = 'One Adult,4Children';
    }

    else if (this.registerForm.get('adult').value == "month" && this.registerForm.get('child').value == 0) {


      this.healthCover = 'two Adult';
    }

    else if (this.registerForm.get('adult').value == "month" && this.registerForm.get('child').value == 1) {


      this.healthCover = 'two Adult,1 Child';
    }

    else if (this.registerForm.get('adult').value == "month" && this.registerForm.get('child').value == 2) {


      this.healthCover = 'two Adults,2 Children';
    }

    else if (this.registerForm.get('adult').value == "month" && this.registerForm.get('child').value == 3) {



      this.healthCover = 'two Adults, 3Children';
    }

    else if (this.registerForm.get('adult').value == "month" && this.registerForm.get('child').value == 4) {


      this.healthCover = 'One Adult, 4Children';
    }
    console.log(this.healthCover)

  }


  showhealthPage(obj) {

    this.submitted = true;
    this.checkCaseForAdult();
    let obj1 = {
      // forms : this.registerForm.value,
      healthName: this.registerForm.get('healthName').value,
      healthPincode: this.registerForm.get('healthPincode').value,
      healthGender: this.registerForm.get('healthGender').value,
      healthEmail: this.registerForm.get('healthEmail').value,
      healthCover: this.healthCover,
      healthSumInsured: "500000",
      utm_source: "",
      healthMobile: this.registerForm.get('healthMobile').value,
      healthAge: this.registerForm.get('healthAge').value,
      // healthDay: "",
      // healthMonth: "",
      // healthYear: "",
      // source_url: "",
      // utm_medium: "",
      // utm_campaign: "",
      // utm_keyword: "",
      // cron_mail_status: 0

    }
    this.checkCaseForAdult();
    if (this.registerForm.valid) {
    console.log(this.registerForm);
 
  
      this.healthServ.gethealthPage(obj1).subscribe((res) => {
        console.log(res)

        console.log(this.registerForm.get('healthName'))
        console.log(res['results'].response.sum_insured)
        this.sumInsured = res['results'].response.sum_insured;
        this.cover = res['results'].response.cover;
      
        this.quote_no = res['results'].response.quote_no;
        this.pincode = res['results'].response.pincode;
        this.city = res['results'].response.city;
        this.state = res['results'].response.state;
        this.mobile = res['results'].response.mobile;
        this.email = res['results'].response.email;
        this.gender = res['results'].response.gender;
        this.age = res['results'].response.age;
        this.adult = res['results'].response.adult;
        this.child = res['results'].response.child;
       
     
        this.getData = localStorage.setItem('user' , JSON.stringify(res) );
        localStorage.getItem(this.getData)
        console.log(this.getData)
        // console.log(localStorage.getItem(this.getData))
        
    
        this.router.navigate(['/homemodule/one'], {
          queryParams: {
            id: 'add',
            healthCover: this.healthCover,
            // sumInsured: this.sumInsured, cover: this.cover,
            // healthCover: this.healthCover, quote: this.quote_no,
            // pincode: this.pincode, city: this.city, state: this.state,
            // email: this.email, mobile: this.mobile, gender: this.gender,
            // age: this.age, child: this.child, adult: this.adult
          }
        })

      })





    }
    // if (this.registerForm.valid) {
    // this.getHealthquotesData();



    // }



    // console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    // console.log(JSON.stringify(this.quote_no))
  }
}
