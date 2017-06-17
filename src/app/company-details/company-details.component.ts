import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companyDetails: Object;
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { companyDetails: Object}) => {
      this.companyDetails = data.companyDetails;
      console.log(this.companyDetails);
    });
  }

}
