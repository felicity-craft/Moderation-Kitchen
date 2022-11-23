import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/interfaces/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-confirm-action-dialog',
  templateUrl: './confirm-action-dialog.component.html',
  styleUrls: ['./confirm-action-dialog.component.scss']
})
export class ConfirmActionDialogComponent implements OnInit {

  public recipe: Observable<Recipe>;

  constructor(
    private dialog: MatDialog,
    private recipeService: RecipeService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

}
