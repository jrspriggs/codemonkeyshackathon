import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, forwardRef, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CoverageDetailComponent } from './coverage-detail.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, AfterViewInit {
  @ViewChildren('coverageForm') public coverageForms: QueryList<CoverageDetailComponent>;
  companyDetails: Object;
    public mainFormGroup: any;
    public premiumAmount: number;
  constructor(
    public builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.mainFormGroup = this.builder.group({
            coverages: this.builder.array([])
        });
    this.premiumAmount = 0;
    this.route.data
    .subscribe((data: { companyDetails: Object}) => {
      this.companyDetails = data.companyDetails;
      console.log(this.companyDetails);
    });
  }

    public ngAfterViewInit() {
        this.coverageForms.forEach((cmp) => {
            if (cmp.coverageForm) {
                if (cmp.coverage.type === 'O') {
                  /*(cmp.coverageForm.get('selected').valueChanges.distinctUntilChanged().subscribe((value) => {
                      this.optionalCoverageChange(value, cmp.coverageForm);
                  });*/
                  if (cmp.coverage.selected === 'Y') {
                    this.premiumAmount += (+cmp.coverage.premiumAmount);
                  }
                } else {
                  // standard coverage just add the premium
                  this.premiumAmount += (+cmp.coverage.premiumAmount);
                }
            }

        });
    }
    public optionalCoverageChange(val: any, coverageForm: FormGroup) {
        if (val === '') {
            console.log('value change', val);
        } else {
            console.log(' else value change', val);
        }
    }

  gotoQuote(): void {
    const link = ['/quote' ];
    this.router.navigate(link);
  }

}
