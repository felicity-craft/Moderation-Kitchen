import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';
import { Observable } from 'rxjs';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  blogPosts!: Observable<Recipe>;

  constructor(
    public dialog: MatDialog,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.blogPosts = this.recipeService.getRecipeBySlug("chocolate-chunk-cookies");
  }

  openDialog() {
    this.dialog.open(ConfirmActionDialogComponent);
  }

}
