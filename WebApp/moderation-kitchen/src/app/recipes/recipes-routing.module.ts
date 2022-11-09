import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeIndexComponent } from './components/recipe-index/recipe-index.component';
import { RecipeComponent } from './components/recipe/recipe.component';


const routes: Routes = [
  {
    path: 'index',
    component: RecipeIndexComponent,
  },
  {
    path: ':name',
    component: RecipeComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
