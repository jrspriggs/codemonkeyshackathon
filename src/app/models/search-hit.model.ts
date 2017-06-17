import { CompanyOverview } from './company-overview.model';

export class SearchHit {
  public hitNumber: number;
  public companyResults: CompanyOverview;

  constructor(   hitNumber: number,
                 companyResults: CompanyOverview) {
    this.hitNumber = hitNumber;
    this.companyResults = companyResults;
  }
}
