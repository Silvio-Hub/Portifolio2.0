import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  imports: [CommonModule],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.scss',
})
export class SkillBarComponent {
  skillsBar = [
    { name: 'Trabalho em equipe', percentage: 85, pathClass: 'path-1' },
    {
      name: 'Adaptabilidade e Flexibilidade',
      percentage: 70,
      pathClass: 'path-2',
    },
    { name: 'Resolução de problemas', percentage: 80, pathClass: 'path-3' },
    { name: 'Comunicação', percentage: 90, pathClass: 'path-4' },
  ];
}
