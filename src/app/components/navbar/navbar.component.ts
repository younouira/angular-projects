import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" routerLink="/">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQFaS1POFEntxw/profile-displayphoto-scale_100_100/B4DZhj4yPyGgAc-/0/1754022489202?e=1766620800&v=beta&t=TvHcyylkQx1ETR7bdIpanG1iPTkhQNSifXO5jwybMb8" alt="Logo" class="me-2 rounded-circle" />
        PC Store
      </a>
      <div class="navbar-nav ms-auto">
        <a class="nav-link" routerLink="/">Accueil</a>
      </div>
    </div>
  </nav>
`,

  styles: []
})
export class NavbarComponent { }