import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'recipes',
    loadChildren: () =>
    import('./recipes/recipes.module').then((m) => m.RecipesModule),
    data: {breadcrumb: { alias: 'Recipes' }}

  },
  {
    path: 'admin',
    loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
    data: {breadcrumb: { alias: 'Admin' }}

  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
