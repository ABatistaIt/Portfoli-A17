import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.routes').then(m => m.ROUTES_HOME)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
