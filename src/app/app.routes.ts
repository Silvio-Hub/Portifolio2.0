import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonaComponent } from './components/persona/persona.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'project', component: ProjectComponent },
];
