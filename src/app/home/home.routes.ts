import { Routes } from "@angular/router";
import { HomeLayoutComponent } from "./home-layout.component";

export const ROUTES_HOME: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        children: [
            {
                path: '',
                title: 'Home',
                loadComponent: () => import('./aboutme/aboutme.component').then(m => m.AboutmeComponent),
            },
            // {
            //     path: 'portfolio',
            //     title: 'Portfolio',
            //     loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent),
            // }
        ]
    }
];