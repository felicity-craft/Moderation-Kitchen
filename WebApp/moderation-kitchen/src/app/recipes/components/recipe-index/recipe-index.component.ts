import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';

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
    this.featuredRecipes =  this.recipeService.getFeaturedRecipes();
  }

}
