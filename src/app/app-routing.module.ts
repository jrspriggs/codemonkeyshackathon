import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';
import { CompanyDetailsResolver } from './services/company-details.resolver.service';
import { QuotePricingComponent } from './quote-pricing/quote-pricing.component';

const routes: Routes = [
  { path: '', redirectTo: '/quote', pathMatch: 'full' },
  { path: 'search', component: KeywordSearchComponent },
  {
    path: 'detail/:id',
    component: CompanyDetailsComponent,
    resolve: {
      companyDetails: CompanyDetailsResolver
    }
  },
  { path: 'quote', component: QuotePricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
