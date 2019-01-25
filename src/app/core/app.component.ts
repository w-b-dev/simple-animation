import { Component } from '@angular/core';

@Component({
  selector: 'anim-root',
  template: `
    <header class="nav-container">
      <nav class="nav">
        <a routerLink="home" routerLinkActive="route-active" class="nav-link home">home</a>
        <a routerLink="about" routerLinkActive="route-active" class="nav-link about">about</a>
        <a routerLink="login" routerLinkActive="route-active" class="nav-link login">login</a>
      </nav>
    </header>
    <main class="main-router-outlet">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
}
