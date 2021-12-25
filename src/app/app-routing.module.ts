import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientsAnalysisService } from './services/resolvers/ingredients-analysis.service';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: IngredientsComponent},
  {path: 'summary', component: SummaryComponent , resolve:{ingredientsAnalysis:IngredientsAnalysisService}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
