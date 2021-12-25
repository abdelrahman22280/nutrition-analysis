import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NutritionService } from '../services/nutrition.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  recipeIngredients:string ="";

  constructor(private nutritionService:NutritionService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
  }

  analyzeIngredients(form:NgForm){
    this.nutritionService.ingredients=form.controls.ingredients.value.split("\n");
    this.router.navigate(['summary'], {relativeTo: this.route});
  }

  setSampleIngredients(){
    this.recipeIngredients=
      ' 3 medium carrots \n 1 medium sweet potato \n 1 tablespoon olive oil \n 1/8 teaspoon salt \n 2 tablespoons pure maple syrup';
  }

}
