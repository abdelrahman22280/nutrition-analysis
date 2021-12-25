import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionService } from '../services/nutrition.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  ingredientsAnalysis:any;
  nutritionAnalysisObj:any;

  loadingNutrition: boolean = false;
  errorMessage:string = '';

  constructor(private nutritionService:NutritionService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ingredientsAnalysis = this.route.snapshot.data.ingredientsAnalysis;
  }

  nutritionAnalysis(){
    this.loadingNutrition = true;
    this.errorMessage = '';
    this.nutritionService.fullRecipeAnalysis().subscribe(
      (res)=>{
        this.nutritionAnalysisObj = res;
        this.loadingNutrition = false;
      },
      (error)=>{
        this.errorMessage = error.error.error;
        this.loadingNutrition = false;
      }
    );
  }
}
