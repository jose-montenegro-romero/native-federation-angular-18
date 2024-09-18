import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'articulos',
    title: 'Articulos',
    loadComponent: () =>
      import('./pages/articles/articles.component').then(
        (mod) => mod.ArticlesComponent
      ),
  },
  {
    path: 'productos',
    title: 'Productos',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (mod) => mod.ProductsComponent
      ),
  },
];
