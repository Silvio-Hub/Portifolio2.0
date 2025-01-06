import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillBarComponent } from './skill-bar/skill-bar.component';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, SkillBarComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  skillsBar = [
    { name: 'HTML', percentage: 72, class: 'html' },
    { name: 'CSS', percentage: 60, class: 'css' },
    { name: 'JAVASCRIPT', percentage: 56, class: 'javascript' },
    { name: 'ANGULAR', percentage: 78, class: 'angular' },
  ];
}
