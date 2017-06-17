import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { SearchHit } from './../models/search-hit.model';
import { CompanyOverview } from './../models/company-overview.model';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-keyword-search',
  templateUrl: './keyword-search.component.html',
  styleUrls: ['./keyword-search.component.css']
})
export class KeywordSearchComponent implements OnInit {

  public searchFormGroup: FormGroup;
  public results:  Observable<SearchHit[]>;
  private searchTerm = new Subject<string>();

  constructor(public builder: FormBuilder,
    private _searchService: SearchService) { }

  public ngOnInit() {
    this.searchFormGroup = this.builder.group({
      keywordText: ['', [Validators.required]]
    });
    this.results = this.searchTerm
    .distinctUntilChanged()
    .switchMap( term => term
        ? this._searchService.searchForCompanyWithKeyword(term)
        : Observable.of<SearchHit[]>([]))
    .catch(error => {
        console.log('error: ${error}');
        return Observable.of<SearchHit[]>([]);
    });
    this.searchTerm.subscribe(x => console.log(x));
    this.results.subscribe(x => console.log(x));
  }

  callSearch() {
    console.log("is this bleeding thing running?");
    // Push a search term into the observable stream.
    this.searchTerm.next(this.searchFormGroup.get('keywordText').value);
  }

}
