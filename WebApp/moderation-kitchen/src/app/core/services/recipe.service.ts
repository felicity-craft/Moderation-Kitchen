import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from, Observable, of, tap } from 'rxjs';
import { ConfirmActionDialogComponent } from 'src/app/recipes/components/confirm-action-dialog/confirm-action-dialog.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Recipe } from '../interfaces/recipe';
import { RecipeComment } from '../interfaces/recipe-comment';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl: string = 'https://localhost:7264';

  private dialog: MatDialog;
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClient
  ) {}

  searchForRecipe(value: string): Observable<Recipe[]> {
    // If value is empty, null or undefined, then return an empty result.
    if (value === '' || !value) {
      return of(new Array<Recipe>());
    }
    if (this.authService.loggedIn()) {
      return this.httpClient.get<Recipe[]>(
        `${this.baseUrl}/api/admin/recipes?filter=${value}`
      );
    }
    return this.httpClient.get<Recipe[]>(
      `${this.baseUrl}/api/recipes?filter=${value}`
    );
  }

  getRecipeBySlug(slug: string): Observable<Recipe> {
    if (this.authService.loggedIn()) {
      return this.httpClient.get<Recipe>(
        `${this.baseUrl}/api/admin/recipes/${slug}`
      );
    }
    return this.httpClient.get<Recipe>(`${this.baseUrl}/api/recipes/${slug}`);
  }

  getFeaturedRecipes(count: number): Observable<Recipe[]> {
    if (this.authService.loggedIn()) {
      return this.httpClient.get<Recipe[]>(
        `${this.baseUrl}/api/admin/recipes/featured?limit=${count}`
      );
    }
    return this.httpClient.get<Recipe[]>(
      `${this.baseUrl}/api/recipes/featured?limit=${count}`
    );
  }

  getAllRecipes(): Observable<Recipe[]> {
    if (this.authService.loggedIn()) {
      return this.httpClient.get<Recipe[]>(`${this.baseUrl}/api/admin/recipes`);
    }
    return this.httpClient.get<Recipe[]>(`${this.baseUrl}/api/recipes`);
  }

  submitComment(slug: string, recipeComment: RecipeComment) {
    return this.httpClient.post<void>(
      `${this.baseUrl}/api/recipes/${slug}/comments`,
      recipeComment
    );
  }

  saveRecipe(recipe: Recipe): Observable<void> {
    return this.httpClient.post<void>(
      `${this.baseUrl}/api/admin/recipes`,
      recipe
    );
  }

  updateRecipe(slug: string, recipe: Recipe): Observable<void> {
    return this.httpClient.put<void>(
      `${this.baseUrl}/api/admin/recipes`,
      recipe
    );
  }

  deleteRecipe(slug: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.baseUrl}/api/admin/recipes/${slug}`
    );
  }
}
