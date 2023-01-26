import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, mergeMap, Observable, Subject, takeUntil } from 'rxjs';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ConfirmLogoutDialogComponent } from '../confirm-logout-dialog/confirm-logout-dialog.component';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  private destroyed$ = new Subject();
  showMenu = false;

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
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.filteredRecipes = this.recipeSearchControl.valueChanges.pipe(
      mergeMap(value => this.recipeService.searchForRecipe(value))
    );

    //close nav menu on mobile on navigate
    //used: https://medium.com/angular-shots/shot-4-how-to-listen-angular-router-events-7a102cca5a80
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationStart),
        takeUntil(this.destroyed$),
      )
      .subscribe((event: NavigationStart) => {
        this.showMenu = false
      });
  }

  openDialog() {
    this.dialog.open(ConfirmLogoutDialogComponent);
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

}
