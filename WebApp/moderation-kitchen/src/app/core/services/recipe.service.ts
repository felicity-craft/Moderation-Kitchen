import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from, Observable, of } from 'rxjs';
import { ConfirmActionDialogComponent } from 'src/app/recipes/components/confirm-action-dialog/confirm-action-dialog.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Recipe } from '../interfaces/recipe';
import { RecipeComment } from '../interfaces/recipe-comment';

var RECIPES: Recipe[] = [
  {
    slug: 'chocolate-macaron-cake',
    isDraft: true,
    title: 'Chocolate macaron cake',
    author: 'Felicity Craft',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/buns.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    ingredients: ['unsalted butter', 'flour'],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 5,
        comment: 'this was yum',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date('11/10/2022'),
      },
    ],
  },
  {
    slug: 'vanilla-cake',
    isDraft: false,
    title: 'Vanilla cake',
    author: 'Chester Craft',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/cereal.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    ingredients: ['unsalted butter', 'flour'],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 4,
        comment: 'this was yum!',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date('11/10/2022'),
      },
    ],
  },
  {
    slug: 'chocolate-chunk-cookies',
    isDraft: false,
    title: 'Chocolate chunk cookies',
    author: 'Isaac Brown',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/fruits.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '15 cookies',
    ingredients: ['unsalted butter', 'flour', 'unsalted butter', 'flour'],
    method: ['Cream butter', 'Add in the eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 4,
        comment: 'this was yum!',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date('2022-10-11'),
      },
      {
        rating: 5,
        comment: 'this was great!',
        name: 'Chester Craft',
        email: 'cc@example.com',
        date: new Date('2022-10-15'),
      },
    ],
  },
  {
    slug: 'cinnamon-rolls',
    isDraft: false,
    title: 'Cinnamon rolls',
    author: 'Felicity Craft',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/buns.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    ingredients: ['unsalted butter', 'flour'],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 5,
        comment: 'this was yum',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date('11/10/2022'),
      },
    ],
  },
  {
    slug: 'banana-cake',
    isDraft: false,
    title: 'Banana cake',
    author: 'Chester Craft',
    date: new Date('29 November 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/cereal.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    ingredients: ['unsalted butter', 'flour'],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 4,
        comment: 'this was yum!',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date('11/10/2022'),
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private dialog: MatDialog;
  constructor(private authService: AuthenticationService) {}

  saveRecipe(recipe: Recipe): Observable<void> {
    RECIPES.push(recipe);
    console.log(RECIPES);
    return new Observable<void>((observer) => observer.complete());
  }

  getRecipeBySlug(slug: string): Observable<Recipe> {
    if (this.authService.loggedIn()) {
      const recipe = RECIPES.filter((r) => r.slug === slug);
      return from(recipe);
    }
    return from (this.getPublishedRecipes().filter((r) => r.slug === slug));
  }

  submitComment(slug: string, recipeComment: RecipeComment) {
    recipeComment.date = new Date();
    const recipe = RECIPES.find((r) => r.slug === slug);
    recipe?.comments.push(recipeComment);
  }

  getFeaturedRecipes(count: number): Observable<Recipe[]> {
    // RECIPES is an array of Recipe interfaces which are not observable as is.
    // Observables are = something that can be subscribed to. They emit three kinds of events: next, complete, and error.
    // Subscribers can listen for these events and take action when they occur.
    // of = make RECIPES into an observable
    return of(this.getPublishedRecipes().slice(0, count));
  }
  
  getAllRecipes(): Observable<Recipe[]> {
    if (this.authService.loggedIn()) {
      return of(this.sortedRecipes());
    }
    return of(this.getPublishedRecipes());
  }
  
  deleteRecipe(slug: string) {
    const index = RECIPES.findIndex((recipe) => recipe.slug === slug);
    // if no recipe is found with the requested slug, then we get back -1.
    // if index does not = -1 (i.e. slug does exist), then remove element at index and only remove 1 element
    if (index !== -1) RECIPES.splice(index, 1);
  }

  private sortedRecipes(): Recipe[] {
    return RECIPES.sort(
      (recipeA, recipeB) => recipeA.date.getTime() - recipeB.date.getTime()
    );
  }

  private getPublishedRecipes(): Recipe[] {
    const now = new Date();
    const publishedRecipes = this.sortedRecipes().filter(
      (recipe) => recipe.date <= now && !recipe.isDraft
    );
    return publishedRecipes;
  }
}
