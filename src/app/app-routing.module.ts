import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';
import { CompanyDetailsResolver } from './services/company-details.resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: KeywordSearchComponent },
  {
    path: 'detail/:id',
    component: CompanyDetailsComponent,
    resolve: {
      companyDetails: CompanyDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
