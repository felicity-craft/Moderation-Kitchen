import { Ingredient } from "./ingredient";
import { RecipeComment } from "./recipe-comment";

export interface Recipe {
  slug: string;
  isDraft: boolean;
  title: string;
  author: string;
  date: Date;
  intro: string;
  heroImage: string;
  body: string;
  prepTime: string;
  cookTime: string;
  quantitySizeMade: string;
  ingredients: string[];
  method: string[];
  tags: string[];
  comments: RecipeComment[];
}
