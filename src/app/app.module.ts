import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpModule } from '@angular/http';
import { SearchService } from './services/search.service';
import { CompanyDetailsService } from './services/company-details.service';
import { CompanyDetailsResolver } from './services/company-details.resolver.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { QuotePricingComponent } from './quote-pricing/quote-pricing.component';
import { CoverageDetailComponent } from './company-details/coverage-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordSearchComponent,
    CompanyDetailsComponent,
    QuotePricingComponent,
    CoverageDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    SearchService,
    CompanyDetailsService,
    CompanyDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
