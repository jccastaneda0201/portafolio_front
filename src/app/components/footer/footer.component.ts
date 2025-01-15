import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faGithub,
      faLinkedin,
      faInstagram,
      faTwitter
    );
  }
}
