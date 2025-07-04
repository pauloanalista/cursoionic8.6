import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cli',
    loadComponent: () => import('./pages/cli/cli.page').then(m => m.CliPage)
  },
  {
    path: 'visual',
    loadComponent: () => import('./pages/visual/visual.page').then(m => m.VisualPage)
  },
  {
    path: 'visual/button',
    loadComponent: () => import('./pages/visual/button/button.page').then(m => m.ButtonPage)
  },
  {
    path: 'visual/alert',
    loadComponent: () => import('./pages/visual/alert/alert.page').then(m => m.AlertPage)
  },

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'visual/badge',
    loadComponent: () => import('./pages/visual/badge/badge.page').then(m => m.BadgePage)
  },
  {
    path: 'visual/componentes-html',
    loadComponent: () => import('./pages/visual/componenteshtml/componenteshtml.page').then(m => m.ComponenteshtmlPage)
  },
  {
    path: 'visual/componentes-js',
    loadComponent: () => import('./pages/visual/componentesjs/componentesjs.page').then(m => m.ComponentesjsPage)
  },
  {
    path: 'nativo',
    loadComponent: () => import('./pages/nativo/nativo.page').then(m => m.NativoPage)
  },
  {
    path: 'nativo/camera',
    loadComponent: () => import('./pages/nativo/camera/camera.page').then(m => m.CameraPage)
  },
  {
    path: 'nativo/share',
    loadComponent: () => import('./pages/nativo/share/share.page').then(m => m.SharePage)
  },  {
    path: 'api',
    loadComponent: () => import('./pages/api/api.page').then( m => m.ApiPage)
  },






];
