import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
getData :any = []; 
  constructor() { }

  ngOnInit() {
  this.getData =   JSON.parse(localStorage.getItem('proposal') || '[]' )
  console.log(this.getData.middleSection)

  }

}
