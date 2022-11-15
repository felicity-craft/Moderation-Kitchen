import { Injectable } from '@angular/core';
import { observable, Observable, from, asapScheduler, delay, count } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { faker } from "@faker-js/faker";

const INGREDIENTS = [
  '100g flour',
  '150g brown sugar',
  '2 eggs',
  '1 tsp vanilla',
  '20g cocoa',
]

const TAGS = [
  'Cake',
  'Cookies',
  'Christmas',
  'Loaf',
  'Hot',
  'Cold',
]

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  getRecipeBySlug(recipeSlug: string): Observable<Recipe> {
    const delayInMillseconds = parseInt(faker.random.numeric(3));

    return from(this.getManyRecipes(1)).pipe(delay(delayInMillseconds));
  }

  private getManyRecipes(count: number = 3): Recipe[] {
    return Array.from({ length: count }, (_, __) => ({
      title: faker.commerce.product(),
      intro: faker.lorem.paragraph(),
      body: faker.lorem.paragraphs(),
      prepTime: `${faker.random.numeric()} mins`,
      cookTime: `${faker.random.numeric()} mins`,
      quantitySizeMade: `${faker.random.numeric()} inch cake`,
      ingredients: faker.helpers.arrayElements(INGREDIENTS, 3),
      method: faker.lorem.lines().split('\n'),
      tags: faker.helpers.arrayElements(TAGS, 3),
      author: faker.name.firstName(),
      publishDate: faker.date.past(),
      heroImageUrl: `/assets/images/random/random-${faker.datatype.number({min: 1, max: 11})}.jpg`,
      printImageUrl: `/assets/images/random/random-${faker.datatype.number({min: 1, max: 11})}.jpg`
    }));
  }
}
