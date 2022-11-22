import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeIndexComponent } from './components/recipe-index/recipe-index.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { EditComponent } from './components/edit/edit.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeIndexComponent,
  },
  {
    path: 'new',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'all-recipes',
    component: AllRecipesComponent,
  },
  {
    path: ':slug',
    component: RecipeComponent,
  },
  { path: ':slug/edit', 
      component: EditComponent, 
      canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
