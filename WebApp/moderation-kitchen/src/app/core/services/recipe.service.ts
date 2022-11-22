import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { RecipeComment } from '../interfaces/recipe-comment';

var RECIPES: Recipe[] = [
  {
    slug: 'chocolate-macaron-cake',
    title: 'Chocolate macaron cake',
    author: 'Felicity Craft',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/buns.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    ingredients: [{ quantity: '100g', ingredient: 'unsalted butter' }],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 5,
        comment: 'this was yum',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date("11/10/2022")
      },
    ],
  },
  {
    slug: 'vanilla-cake',
    title: 'Vanilla cake',
    author: 'Chester Craft',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/cereal.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    ingredients: [{ quantity: '100g', ingredient: 'unsalted butter' }],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 4,
        comment: 'this was yum!',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date("11/10/2022")
      },
    ],
  },
  {
    slug: 'chocolate-chunk-cookies',
    title: 'Chocolate chunk cookies',
    author: 'Isaac Brown',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/fruits.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '15 cookies',
    ingredients: [
      { quantity: '100g', ingredient: 'unsalted butter' },
      { quantity: '200g', ingredient: 'caster sugar' },
    ],
    method: ['Cream butter', 'Add in the eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 4,
        comment: 'this was yum!',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date("2022-10-11")
      },
      {
        rating: 5,
        comment: 'this was great!',
        name: 'Chester Craft',
        email: 'cc@example.com',
        date: new Date("2022-10-15")
      },
    ],
  },
  {
    slug: 'cinnamon-rolls',
    title: 'Cinnamon rolls',
    author: 'Felicity Craft',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/buns.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    ingredients: [{ quantity: '100g', ingredient: 'unsalted butter' }],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 5,
        comment: 'this was yum',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date("11/10/2022")
      },
    ],
  },
  {
    slug: 'banana-cake',
    title: 'Banana cake',
    author: 'Chester Craft',
    date: new Date('17 July 2022'),
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/cereal.jpg',
    body: 'Some text here for the body',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    ingredients: [{ quantity: '100g', ingredient: 'unsalted butter' }],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
    comments: [
      {
        rating: 4,
        comment: 'this was yum!',
        name: 'Bobby Brown',
        email: 'bb@example.com',
        date: new Date("11/10/2022")
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  publishRecipe(recipe: Recipe): Observable<void> {
    RECIPES.push(recipe);
    console.log(RECIPES);
    return new Observable<void>((observer)=> observer.complete());
  }

  getRecipeBySlug(slug: string): Observable<Recipe> {
    const recipe = RECIPES.filter((r) => r.slug === slug);
    return from(recipe);
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
    return of(RECIPES.slice(0, count));
  }

  getAllRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

}
