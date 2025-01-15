import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isSobreMiActive: boolean = false;

  updateNavbarClass(route: string) {
    switch (route) {
      case '/sobremi':
        this.isSobreMiActive = true;
        break;
      case '/':
        this.isSobreMiActive = false;
        break;
      default:
        this.isSobreMiActive = false;
        break;
    }
  }
}
