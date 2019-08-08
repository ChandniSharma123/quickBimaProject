import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.css']
})
export class ProposalFormComponent implements OnInit {

  proposalForm: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.proposalForm = this.formBuilder.group({
      pName: ['', Validators.required],
      gender: ['', Validators.required],
      tel: ['', Validators.required],
      income: ['', Validators.required],
      email: ['', Validators.required],
      DOB: ['', Validators.required],
      aaDhar: ['', Validators.required],
      mob: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      occupation: ['', Validators.required],
      //  proposalAddress : ['', Validators.required],
      //  proposalid : ['', Validators.required],
      //  proposaldata : ['', Validators.required],
      //  proposalArtifact  : ['', Validators.required],
      proposerStatus: ['', Validators.required],




    })
  }


}
