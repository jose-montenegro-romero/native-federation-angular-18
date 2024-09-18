import { Routes } from '@angular/router';
// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('home', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'articulos',
    loadComponent: () =>
      loadRemoteModule('home', './Routes').then((m) => m.Routes),
  },
  {
    path: 'productos',
    loadComponent: () =>
      loadRemoteModule('home', './Route').then((m) => m.Routes),
  },
  {
    path: 'remote',
    loadComponent: () =>
      loadRemoteModule('remote', './Component').then((m) => m.AppComponent),
  },
];
