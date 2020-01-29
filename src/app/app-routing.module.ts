import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchCandidateComponent} from './search-candidate/search-candidate.component';
import {PositionsListComponent} from './positions-list/positions-list.component';
import {AddQuestionsComponent} from './add-questions/add-questions.component';
import {EmployeeQuestionsComponent} from './employee-questions/employee-questions.component';

const routes: Routes = [
  {path: 'questionnaire', component: EmployeeQuestionsComponent},
  {path: 'search-candidate', component: SearchCandidateComponent},
  {path: 'add-questions', component: AddQuestionsComponent},
  {path: 'positions-list', component: PositionsListComponent},
  {path: '', redirectTo: '/positions-list', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
