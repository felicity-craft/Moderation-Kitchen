import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe$!: Observable<Recipe>;

  constructor(
    private breadcrumbService: BreadcrumbService,
    public dialog: MatDialog,
    private http: HttpClient,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@recipe', 'Chocolate chunk cookies')
    this.recipe$ = this.recipeService.getRecipeBySlug('choc-chunk-cookies');
  }

  openDialog() {
    this.dialog.open(ConfirmActionDialogComponent);
  }

  getBlogPost(){
    return this.http.get<{title: string, intro: string, body: string}[]> ("/assets/blog-posts.json");
  }
}
