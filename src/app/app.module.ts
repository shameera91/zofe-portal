import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './ng-modules/shared.module';
import { NavigationComponent } from './common/navigation/navigation.component';
import { PositionsListComponent } from './positions-list/positions-list.component';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PositionsListComponent,
    SearchCandidateComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
