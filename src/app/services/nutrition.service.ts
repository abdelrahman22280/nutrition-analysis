import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  constructor(private http: HttpClient) { }

  ingredients:string[] = [];
  ingredientsAnalysis:any[]=[];

  analyzeIngredient(ingr: string){
    const params = new HttpParams()
    .set('app_id','86d0f25f')
    .set('app_key','b09372b0236b767a0038d7477057df68')
    .set('ingr', ingr);
    return this.http.get('https://api.edamam.com/api/nutrition-data',{params})
  }

  fullRecipeAnalysis(){
    const params = new HttpParams()
    .set('app_id','86d0f25f')
    .set('app_key','b09372b0236b767a0038d7477057df68');
    return this.http.post('https://api.edamam.com/api/nutrition-details',{"ingr":this.ingredients},{params})
  }

}
