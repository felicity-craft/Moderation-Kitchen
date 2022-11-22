import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';
import { Observable } from 'rxjs';
import { Recipe } from '../../../core/interfaces/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeComment } from '../../../core/interfaces/recipe-comment';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  blogPosts!: Observable<Recipe>;
  public slug!: string;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
    this.blogPosts = this.recipeService.getRecipeBySlug(this.slug);
  }

  openDialog() {
    this.dialog.open(ConfirmActionDialogComponent);
  }

  onSubmitComment(recipeComment: RecipeComment){
    this.recipeService.submitComment(this.slug, recipeComment);
  }
}
