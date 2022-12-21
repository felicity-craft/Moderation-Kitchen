import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/interfaces/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  public allRecipes: Observable<Recipe[]>

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.allRecipes = this.recipeService.getAllRecipes();
  }

}
