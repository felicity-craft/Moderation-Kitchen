import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { mergeMap, Observable } from 'rxjs';
import { RecipeService } from 'src/app/core/services/recipe.service';


@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  recipeSearchControl= new FormControl('');
  filteredRecipes: Observable<{title: string, slug: string}[]>;

  @Input()
  tags: string[] = []

  constructor(
    private recipeService: RecipeService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.filteredRecipes = this.recipeSearchControl.valueChanges.pipe(
      mergeMap(value => this.recipeService.searchForRecipe(value))
    );
  }

  onTagSelected() {
    this.snackBar.open('Searching by tag is not implemented yet', 'Close')
  }

}

