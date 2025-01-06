import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PersonaComponent } from '../../components/persona/persona.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectComponent } from '../../components/project/project.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    PersonaComponent,
    AboutComponent,
    CommonModule,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
