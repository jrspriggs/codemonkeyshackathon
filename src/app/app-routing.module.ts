import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeywordSearchComponent } from './keyword-search/keyword-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: KeywordSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
