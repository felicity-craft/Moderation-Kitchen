import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, mergeMap, Observable, startWith } from 'rxjs';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

recipeSearchControl= new FormControl('');
filteredRecipes: Observable<{title: string, slug: string}[]>;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    // Listen for value changes on our recipeSearchControl.
    // Pass the value change into the pipe (so things can listen for it).
    // Map takes the value as an input and passes the value to recipeService and asks for results which match the value.
    // recipeService returns recipes which match the search term to map.
    // Map then puts that back in the pipe for the next thing to deal with.
    // Maps' return value gets dropped into filteredRecipes.
    // Filtered recipes then broadcasts the return value to view.
    this.filteredRecipes = this.recipeSearchControl.valueChanges.pipe(
      mergeMap(value => this.recipeService.searchForRecipe(value))
    );
  }

}
