import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpModule } from '@angular/http';
import { SearchService } from './services/search.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
