import { Component, OnInit} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Recipe } from 'src/app/core/interfaces/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],

})
export class AdminHomeComponent implements OnInit {

  public recipes: Observable<Recipe[]>
  
  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
  this.recipes = this.recipeService.getAllRecipes().pipe(tap(recipes => console.log(recipes)));
  }

}
