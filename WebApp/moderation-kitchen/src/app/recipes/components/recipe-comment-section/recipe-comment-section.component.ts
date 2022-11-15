import { Component, Input, OnInit } from '@angular/core';
import { RecipeComment } from '../../interfaces/recipe-comment';

@Component({
  selector: 'app-recipe-comment-section',
  templateUrl: './recipe-comment-section.component.html',
  styleUrls: ['./recipe-comment-section.component.scss']
})
export class RecipeCommentSectionComponent implements OnInit {

  @Input()
  public recipeTitle?: string;

  @Input()
  public comments?: RecipeComment[];

  constructor() { }

  ngOnInit(): void {
  }

}
