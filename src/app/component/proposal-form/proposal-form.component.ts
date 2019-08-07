import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.css']
})
export class ProposalFormComponent implements OnInit {

  proposalForm : FormGroup

  constructor(private router: Router, private  formBuilder : FormBuilder , private formGropup : FormGroup  ) { }

  ngOnInit() {
this.proposalForm = this.formBuilder.group({
//  proposalName  : ['' ,Validators.required],
//  proposalAddress : ['', Validators.required],
//  proposalid : ['', Validators.required],
//  proposaldata : ['', Validators.required],
//  proposalDob : ['', Validators.required],
//  proosalAddharno : ['' , Validators.required],
//  proposalArtifact  : ['', Validators.required],
//  proposalPhoneNo : ['', Validators.required],
//  proposerHeight : ['', Validators.required],
//  proposerStatus : ['', Validators.required],

 

   
})
  }

 
}
