import { RecipeComment } from "./recipe-comment";
import { RecipeRating } from "./recipe-rating";

export interface Recipe {
  slug: string;
  isDraft: boolean;
  title: string;
  author: string;
  date: Date;
  intro: string;
  heroImage: string;
  body: string;
  rating?: RecipeRating;
  prepTime: string;
  cookTime: string;
  quantitySizeMade: string;
  ingredients: string[];
  method: string[];
  tags: string[];
  comments: RecipeComment[];
}
