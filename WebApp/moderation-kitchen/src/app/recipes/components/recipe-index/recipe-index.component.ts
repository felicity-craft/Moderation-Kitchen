import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { TagService } from 'src/app/core/services/tag.service';
import { Recipe } from '../../../core/interfaces/recipe';

@Component({
  selector: 'app-recipe-index',
  templateUrl: './recipe-index.component.html',
  styleUrls: ['./recipe-index.component.scss']
})
export class RecipeIndexComponent implements OnInit {

  public featuredRecipes: Observable<Recipe[]>
  public tags: Observable<string[]>

  constructor(
    private recipeService: RecipeService,
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.featuredRecipes =  this.recipeService.getFeaturedRecipes(3);
    this.tags = this.tagService.getAllTags();
  }

}
