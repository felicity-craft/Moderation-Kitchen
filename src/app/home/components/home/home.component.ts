import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/interfaces/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public featuredRecipes: Observable<Recipe[]>

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.featuredRecipes =  this.recipeService.getFeaturedRecipes(4);
  }

}
