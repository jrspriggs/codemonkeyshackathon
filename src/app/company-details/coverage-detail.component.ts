import { Component, Input, Output, Injectable, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, FormArray, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs/Rx';
import { Coverage } from './../models/coverage.model';

@Component({
    selector: 'app-coverage-detail',
    template: `
      <div class="row searchResultsRow" [formGroup]="coverageForm">
        <div class="col">
            <input *ngIf="coverage.type=='O'"
                type="checkbox" name="selectBox"
                formControlName="selectBox"
                [checked]="coverage.selected=='Y'">
        </div>
        <div class="col-9">
              {{coverage.name}}
            <input type="hidden" name="premiumAmount" formControlName="premiumAmount" [value]="coverage.premiumAmount" />
          </div>
          <div class="col-2">
              Value: {{coverage.value}}
          </div>
        </div>
    `
})

@Injectable()
export class CoverageDetailComponent implements OnInit {
    @Input() public coverage: Coverage;
    @Output() public selectChanges = new BehaviorSubject('');

    public coverageForm: FormGroup;
    public formErrors: any = {};

    public ngOnInit() {
        this.coverageForm = this.createCoverageForm(this.coverage);
        if (this.coverageForm.get('selectBox')) {
            //this.coverageForm.get('selectBox').valueChanges.subscribe(this.selectChanges);
        }
    }

    private createCoverageForm(coverage: Coverage): FormGroup {
        let coverageForm = new FormGroup({});
        coverageForm.addControl('selectBox', new FormControl('', []));
        coverageForm.addControl('premiumAmount', new FormControl('', []));
        if (coverage.selected === 'Y') {
            coverageForm.get('selectBox').setValue('Y');
        }

        return coverageForm;
    }
}
