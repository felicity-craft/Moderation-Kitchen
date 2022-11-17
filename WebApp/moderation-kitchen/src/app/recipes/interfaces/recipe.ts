import { Ingredient } from "./ingredient";

export interface Recipe {
  slug: string;
  title: string;
  author: string;
  date: string;
  intro: string;
  heroImage: string;
  body: string;
  printImage: string;
  prepTime: string;
  cookTime: string;
  quantitySizeMade: string;
  inredients: Ingredient[];
  method: string[];
  tags: string[];
}
