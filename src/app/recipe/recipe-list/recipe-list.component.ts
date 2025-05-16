import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Recipe }            from '../Recipe';
import { RecipeService }     from '../recipe.service';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<RecipeDetailComponent> = [];
   selected: Boolean = false;
  selectedRecipe: Recipe | null = null;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recipeService.listarRecipes();
  }

  onSelected(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    this.selected = true;
  }
}

