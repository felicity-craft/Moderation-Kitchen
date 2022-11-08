import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RatingComponent } from './components/rating/rating.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MethodComponent } from './components/method/method.component';
import { SocialMediaCallComponent } from './components/social-media-call/social-media-call.component';
import { RecipeCommentSectionComponent } from './components/recipe-comment-section/recipe-comment-section.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    RecipeComponent,
    RatingComponent,
    PreparationComponent,
    IngredientsComponent,
    MethodComponent,
    SocialMediaCallComponent,
    RecipeCommentSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecipesRoutingModule,
    FontAwesomeModule,
  ],

})
export class RecipesModule { }
