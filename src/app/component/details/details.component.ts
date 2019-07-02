import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
sub:any=[];
storeDetails:any=[];
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.sub = this.route.queryParams.subscribe((params) => {
     
      this.storeDetails = params['data'];
      console.log(this.storeDetails)
    });
  }

}
