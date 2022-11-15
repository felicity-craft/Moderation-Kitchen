import { RecipeRating } from "./recipe-rating";

/**
 * Represents a blog post for a recipe.
 */
export interface Recipe {
  title: string;
  intro: string;
  body: string;
  prepTime: string;
  cookTime: string;
  quantitySizeMade: string;
  ingredients: string[];
  method: string[];
  tags: string[];
  author: string;
  publishDate: Date;
  heroImageUrl: string;
  printImageUrl: string;
  rating: RecipeRating;
}
