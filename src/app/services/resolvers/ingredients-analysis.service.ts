import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { NutritionService } from '../nutrition.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsAnalysisService implements Resolve<any[]>{

  constructor(private nutritionService:NutritionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> {
    let ingredientsAnalysis:any[]=[];
    this.nutritionService.ingredients.forEach((el)=>{
      this.nutritionService.analyzeIngredient(el).pipe(
        map((response)=>{
          let newResponse = { ingredientStr: el, ...response};
          return newResponse;
        }
      )).subscribe(res =>{
        ingredientsAnalysis.push(res);
      });
    });
    return ingredientsAnalysis;
  }
}
