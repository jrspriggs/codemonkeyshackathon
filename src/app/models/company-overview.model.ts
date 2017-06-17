export class CompanyOverview {
  public companyName: string;
  public parentName: string;
  public companyId: number;
  public countryId: number;
  public stateOrProvince: string;
  public city: string;
  public companyTypeDescription: string;
  public postalCode: string;
  public primaryUrl: string;
  public address1: string;
  public address2: string;
  public familyTreeSize: number;
  public locationType: string;
  public country: string;
  public employeesAtThisLocation: number;
  public employeesTotal: number;
  public hqPhone: string;

  constructor(   companyName: string,
                 parentName: string,
                 companyId: number,
                 countryId: number,
                 stateOrProvince: string,
                 city: string,
                 companyTypeDescription: string,
                 postalCode: string,
                 primaryUrl: string,
                 address1: string,
                 address2: string,
                 familyTreeSize: number,
                 locationType: string,
                 country: string,
                 employeesAtThisLocation: number,
                 employeesTotal: number,
                 hqPhone: string) {
    this.companyName = companyName;
    this.parentName = parentName;
    this.companyId = companyId;
    this.countryId = countryId;
    this.stateOrProvince = stateOrProvince;
    this.city = city;
    this.companyTypeDescription = companyTypeDescription;
    this.postalCode = postalCode;
    this.primaryUrl = primaryUrl;
    this.address1 = address1;
    this.address2 = address2;
    this.familyTreeSize = familyTreeSize;
    this.locationType = locationType;
    this.country = country;
    this.employeesAtThisLocation = employeesAtThisLocation;
    this.employeesTotal = employeesTotal;
    this.hqPhone = hqPhone;
  }
}
