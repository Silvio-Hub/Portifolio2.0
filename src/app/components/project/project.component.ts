import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  projects = [
    {
      title: 'Teste 123',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt dolore sit reiciendis id ab aliquam tenetur earum minus ex!',
      image: 'img/img-p1.jpg',
      link: 'https://github.com/Silvio-Hub/user-filter',
      category: 'Produto',
    },
    {
      title: 'Teste 456',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt dolore sit reiciendis id ab aliquam tenetur earum minus ex!',
      image: 'img/img-p2.jpg',
      link: '#',
      category: 'Interação',
    },
    {
      title: 'Teste 789',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt dolore sit reiciendis id ab aliquam tenetur earum minus ex!',
      image: 'img/img-p3.jpg',
      link: '#',
      category: 'Aplicação Web',
    },
    {
      title: 'Teste 123',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt dolore sit reiciendis id ab aliquam tenetur earum minus ex!',
      image: 'img/img-p4.jpg',
      link: 'https://github.com/Silvio-Hub/user-filter',
      category: 'Produto',
    },
    {
      title: 'Teste 123',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt dolore sit reiciendis id ab aliquam tenetur earum minus ex!',
      image: 'img/img-p5.jpg',
      link: 'https://github.com/Silvio-Hub/user-filter',
      category: 'Produto',
    },
    {
      title: 'Teste 123',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt dolore sit reiciendis id ab aliquam tenetur earum minus ex!',
      image: 'img/img-p6.jpg',
      link: '#',
      category: 'Produto',
    },
  ];

  selectedCategory: string = 'All';

  getFilteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    } else {
      return this.projects.filter(
        (project) => project.category === this.selectedCategory
      );
    }
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
