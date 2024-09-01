import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderMainComponent } from '../shared/components/header-main/header-main.component';
import { FooterMainComponent } from '../shared/components/footer-main/footer-main.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HeaderMainComponent, FooterMainComponent],
  template: `
    <!-- Header Main -->
    <app-header-main></app-header-main>
    
    <!-- Enrutamiento principal -->
    <main>
      <router-outlet></router-outlet>
    </main>
    
    <!-- Footer Main -->
     <app-footer-main></app-footer-main>
  `,
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
