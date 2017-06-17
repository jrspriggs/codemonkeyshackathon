import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SearchHit } from './../models/search-hit.model';
import { CompanyOverview } from './../models/company-overview.model';

@Injectable()
export class CompanyDetailsService {

  private API_URL: string;
  private API_TIMEOUT: number;
  constructor(private http: Http) {
    // hardcoding these for now
    this.API_URL = '/v1/details/';
    this.API_TIMEOUT = 3000;
   }

   public getCompanyDetails(companyId: number): Promise<Object> {
    let url = this.API_URL + companyId;
    console.log('URL used for service: ', url);

    let extractData = (response) => {

      let body: Object = response.json();
      return body;
    }

    return this.http.get(url)
    .map(extractData).toPromise();
   }


}
