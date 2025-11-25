import { Routes } from '@angular/router';
import { PersonajePage } from './personaje/personaje.page';
import { EpisodioPage } from './episodio/episodio.page';
import { LocacionPage } from './locacion/locacion.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'personaje',
    loadComponent: () => import('./personaje/personaje.page').then( m => m.PersonajePage)
  },
  { path: 'personaje/:id', component: PersonajePage },
  {
    path: 'episodio',
    loadComponent: () => import('./episodio/episodio.page').then( m => m.EpisodioPage)
  },
  { path: 'episodio/:id', component: EpisodioPage },
  {
    path: 'locacion',
    loadComponent: () => import('./locacion/locacion.page').then( m => m.LocacionPage)
  },
  { path: 'locacion/:id', component: LocacionPage },
];
