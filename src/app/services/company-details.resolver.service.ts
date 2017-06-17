// company-details.resolve.service.ts

import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { CompanyDetailsService } from './company-details.service';

@Injectable()
export class CompanyDetailsResolver implements Resolve<Object> {
    constructor(private companyDetailsService: CompanyDetailsService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Object> | boolean {
        let id = +route.params['id'];
        return this.companyDetailsService.getCompanyDetails(id).then(hero => {
            if (hero) {
                return hero;
            } else { // id not found
                this.router.navigate(['/dashboard']);
                return false;
            }
        });
    }
}
