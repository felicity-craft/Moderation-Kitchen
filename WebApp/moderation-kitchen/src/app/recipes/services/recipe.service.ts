import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe';

const RECIPES: Recipe[] = [
  {
    slug: 'chocolate-macaron-cake',
    title: 'Chocolate macaron cake',
    author: 'Felicity Craft',
    date: '31st October 2022',
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/buns.jpg',
    body: 'Some text here for the body',
    printImage: '/assets/images/post-images/buns.jpg',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    inredients: [{ quantity: '100g', ingredient: 'unsalted butter' }],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
  },
  {
    slug: 'vanilla-cake',
    title: 'Vanilla cake',
    author: 'Chester Craft',
    date: '15th May 2022',
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/cereal.jpg',
    body: 'Some text here for the body',
    printImage: '/assets/images/post-images/cereal.jpg',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '8inch cake',
    inredients: [{ quantity: '100g', ingredient: 'unsalted butter' }],
    method: ['cream butter', 'add in eggs'],
    tags: ['Cake', 'Chocolate'],
  },
  {
    slug: 'chocolate-chunk-cookies',
    title: 'Chocolate chunk cookies',
    author: 'Isaac Brown',
    date: '17th July 2022',
    intro: 'Some text here for intro',
    heroImage: '/assets/images/post-images/fruits.jpg',
    body: 'Some text here for the body',
    printImage: '/assets/images/post-images/fruits.jpg',
    prepTime: '15 mins',
    cookTime: '30 mins',
    quantitySizeMade: '15 cookies',
    inredients: [{ quantity: '100g', ingredient: 'unsalted butter' }, { quantity: '200g', ingredient: 'caster sugar'}],
    method: ['Cream butter', 'Add in the eggs'],
    tags: ['Cake', 'Chocolate'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  getRecipeBySlug(slug: string): Observable<Recipe> {
    const recipe = RECIPES.filter((r) => r.slug === slug);
    return from(recipe);
  }

  constructor() {}
}
