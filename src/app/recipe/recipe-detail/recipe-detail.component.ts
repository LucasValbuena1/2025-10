import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeId!: string;
  @Input() recipeDetail!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  getRecipe() {
    this.recipeService.obtenerRecipePorId(+this.recipeId)
      .subscribe((apiData: Recipe) => this.recipeDetail = apiData);
  }

  ngOnInit() {
    if (this.recipeDetail === undefined) {
      this.recipeId = this.route.snapshot.paramMap.get('id')!;
      if (this.recipeId) {
        this.getRecipe();
      }
    }
  }
}



//YA ESTA BIEN