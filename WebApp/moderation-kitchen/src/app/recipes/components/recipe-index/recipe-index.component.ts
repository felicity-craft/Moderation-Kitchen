import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Recipe } from '../../../core/interfaces/recipe';

@Component({
  selector: 'app-recipe-index',
  templateUrl: './recipe-index.component.html',
  styleUrls: ['./recipe-index.component.scss']
})
export class RecipeIndexComponent implements OnInit {

  public featuredRecipes: Observable<Recipe[]>

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.featuredRecipes =  this.recipeService.getFeaturedRecipes(3);
  }

}
