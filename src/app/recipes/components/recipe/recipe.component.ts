import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';
import { Observable } from 'rxjs';
import { Recipe } from '../../../core/interfaces/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeComment } from '../../../core/interfaces/recipe-comment';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { ViewportScroller } from '@angular/common';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  blogPosts!: Observable<Recipe>;
  public slug!: string;
  public get showAdminButtons(): boolean{
    return this.authService.loggedIn();
  };
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private recipeService: RecipeService,
    private viewportScroller: ViewportScroller,
    private authService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
    this.blogPosts = this.recipeService.getRecipeBySlug(this.slug);
  }

  openDialog() {
    const a = this.dialog.open(ConfirmActionDialogComponent);
    a.afterClosed().subscribe({
      next: (result) => {
        console.log('result:', result);
        if (result === 'delete') {
          this.recipeService.deleteRecipe(this.slug).subscribe({
            next: _ => this.router.navigateByUrl('/admin')
          });
        }
      },
    });
  }

  onSubmitComment(recipeComment: RecipeComment) {
    this.recipeService.submitComment(this.slug, recipeComment).subscribe({
      next: () =>  {
        window.location.reload();
      }
    });
   ;
  }

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
