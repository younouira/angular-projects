import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar></app-navbar>
  <main>
    <router-outlet></router-outlet>
  </main>
  <footer class="container text-center py-3">
    <p>© 2025 PC Store - Tous droits réservés</p>
  </footer>

  <!-- Badge personnel -->
  <div class="position-fixed bottom-0 end-0 m-3">
    <span class="badge bg-primary rounded-pill px-3 py-2">
      🚀 Créé par [Youssef NOUIRA] | Dev Web & Angular Enthusiast
    </span>
  </div>
`,
  styles: []
})
export class AppComponent { }