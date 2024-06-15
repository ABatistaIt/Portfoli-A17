import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
    },
    {
        path: 'auth',
    },
    {
        path: 'admin',
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
