import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SearchHit } from './../models/search-hit.model';
import { CompanyOverview } from './../models/company-overview.model';

@Injectable()
export class SearchService {

  private API_URL: string;
  private API_TIMEOUT: number;
  constructor(private http: Http) {
    // hardcoding these for now
    this.API_URL = '/v1/search/';
    this.API_TIMEOUT = 3000;
   }

   public searchForCompanyWithKeyword(keyword: string): Observable<SearchHit[]> {
    let url = this.API_URL + keyword;
    console.log('URL used for service: ', url);

    let extractData = (response) => {
      let jsonResponse: any = response.json();

      let body: SearchHit[] = [];
      if (jsonResponse.resultSet.totalHits > 0) {
        body = <SearchHit[]> jsonResponse.resultSet.hit;
      }
      return body;
    }

    return this.http.get(url)
    .map(extractData)
   }


}
