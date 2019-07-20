import { Component, OnInit, SkipSelf } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EditService } from './edit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthQuotesService } from '../health-quotes/health-quotes.service';

import { HealthQuotesComponent } from '../health-quotes/health-quotes.component'
import { JsonPipe } from '@angular/common';

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
  editStoring: any = [];
  smInsured: any = [];
  quote: any = [];
  getData: any = [];
  icon: any = [];
  city: any = [];
  state: any = [];
  localdata: any = [];
  gender: any = [];
  email: any = [];
  mobile: any = [];
  child: any = [];
  adult: any = [];
  age: any = [];
  subArray: any = [];
  ageVar: any = [];
  storing: any = [];

  editObj = {
    quote_no: "",
    sum_insured: "",
    gender: "",
    age: "",
    city: "",
    state: "",
    term: 1,
    pincode: "",
    cover: "",
    adult: "",
    child: "",
  }

  editstoringObj = {
    quote_no: "",
    sum_insured: "",
    gender: "",
    age: "",
    city: "",
    state: "",
    term: 1,
    pincode: "",
    cover: "",
    adult: "",
    child: "",
  }

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
    this.storing = JSON.parse(localStorage.getItem('user') || '[]');

    this.editObj.sum_insured = this.storing.sum_insured;
    this.editObj.gender = this.storing.gender;
    console.log(this.editObj.gender)

    this.editObj.pincode = this.storing.pincode;
    this.editObj.quote_no = this.storing.quote_no;
    console.log(this.editObj.pincode)
    this.editObj.city = this.storing.city;

    this.editObj.child = this.storing.child;
    this.editObj.state = this.storing.state;
    this.editObj.cover = this.storing.cover;
    this.editObj.age = this.storing.age;
    this.editObj.adult = this.storing.adult;
    console.log(this.editObj.adult)

    this.route.queryParams.subscribe((params) => {
      // console.log(params)
      // this.icon = params['cover'];
      // this.quote = params['quote_no'];
      // this.state = params['state'];
      // this.city = params['city'];
      // this.gender = params['gender'];
      // this.email = params['email'];
      // this.mobile = params['mobile'];
      // this.smInsured = params['sum_insured'];
      // this.adult = params['adult'];
      // this.child = params['child'];
      // this.age = params['age'];
      // this.pincode = params['pincode'];
      // console.log(this.quote, this.state, this.city)

      // this.storeParams = params['page'];
      // console.log(this.storeParams)
      // console.log(typeof (this.storeParams))
    });

    this.updateForm.controls['age'].setValue(this.editObj.age);
    this.updateForm.controls['gender'].setValue(this.editObj.gender);
    this.updateForm.controls['pincode'].setValue(this.editObj.pincode);
    console.log(this.updateForm.controls);
    this.updateForm.controls['adult'].setValue(this.editObj.adult);
    this.updateForm.controls['child'].setValue(this.editObj.child);
    console.log(this.updateForm.controls)
  }


  countAge() {
    for (var i = 18; i <= 110; i++) {
      // console.log(i)

      // this.ageVar = i
      // console.log(this.ageVar)
      this.ageVar.push(i);
      // console.log(typeof(this.ageVar.push(i)))
      this.subArray = this.ageVar
      // console.log(this.subArray)
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
    this.router.navigate(['/homemodule/one'],
      {
        queryParams: {
          id: 'skip'

        }
      }
    )

  }
  updateeditDetails() {
    //console.log(this.updateForm)
    this.checkgender();
    this.checkCaseForAdult();
    //console.log(this.icon);

    let data = {
    
          quote_no: this.editObj.quote_no,
          sum_insured: this.editObj.sum_insured,
          age: this.updateForm.get('age').value,
          city: this.editObj.city,
          state: this.editObj.state,
          term: 1,
          cover: this.icon,
          adult: this.updateForm.get('adult').value,
          child: this.updateForm.get('child').value,
          pincode: this.updateForm.get('pincode').value,
          gender: this.updateForm.get('gender').value,

        }
    

    // console.log(data['results'].response.age)
    // if(this.updateForm.valid){
    this.editServ.updateHealthQuotes(data).subscribe((store) => {
      console.log(store)
      this.getData = localStorage.setItem('user', JSON.stringify(data));


      this.localdata = localStorage.getItem(this.getData)
      console.log(this.localdata)


      this.router.navigate(['/homemodule/one'],
        {
          queryParams: {
            id: 'update',
            healthCover: this.healthCover,

          }
        })


    })
  }
}
