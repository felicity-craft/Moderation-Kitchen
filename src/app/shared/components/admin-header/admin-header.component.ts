import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { mergeMap, Observable } from 'rxjs';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ConfirmLogoutDialogComponent } from '../confirm-logout-dialog/confirm-logout-dialog.component';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  public get showLogout(): boolean
  {
    return this.authService.loggedIn();
  }
  recipeSearchControl= new FormControl('');
  filteredRecipes: Observable<{title: string, slug: string}[]>;

  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.filteredRecipes = this.recipeSearchControl.valueChanges.pipe(
      mergeMap(value => this.recipeService.searchForRecipe(value))
    );
  }

  openDialog() {
    this.dialog.open(ConfirmLogoutDialogComponent);
  }
}
