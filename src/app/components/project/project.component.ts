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
      title: 'ALURA-QUIZ',
      description:
        'O meu quiz foi desenvolvido na semana com a Alura, e foi construído em React, utiliza tecnologias modernas para criar uma experiência interativa e envolvente.',
      technologies: 'Html - CSS - JavaScript - React - Deploye Vercel',
      image: 'img/img-p1.jpg',
      link: 'https://aluraquiz-base-seven-kappa.vercel.app/',
      category: 'ReactJS',
    },
    {
      title: 'Tabela de Usuários',
      description:
        'Esta aplicação apresenta uma tabela dinâmica de usuários, construída com Angular, onde é possível realizar buscas e filtros para facilitar a visualização e manipulação de grandes volumes de dados. A tabela possui várias funcionalidades interativas.',
      technologies: 'Html - CSS - TypeScript - Angular-16 - GitHub',
      image: 'img/img-p2.jpg',
      link: 'https://github.com/Silvio-Hub/user-filter',
      category: 'Angular',
    },
    {
      title: 'NLW-4 RocketSeat',
      description:
        'Durante minha participação no evento NLW 4 (Next Level Week 4) da RocketSeat, desenvolvi uma aplicação interativa utilizando ReactJS que simula um contador de pausas cronometradas, com o objetivo de ajudar os usuários a gerenciar melhor seus períodos de descanso durante o trabalho ou estudo.',
      technologies: 'Html - CSS - JavaScript - React - GitHub',
      image: 'img/img-p3.jpg',
      link: 'https://github.com/Silvio-Hub/NLW4',
      category: 'ReactJS',
    },
    {
      title: 'Portifólio',
      description:
        'Este projeto é o meu portfólio pessoal, desenvolvido utilizando Angular 19, que exibe de forma clara e organizada os meus projetos, habilidades e experiências profissionais na área de desenvolvimento web. O objetivo é apresentar de maneira interativa e responsiva os detalhes das tecnologias que domino, bem como os projetos que desenvolvi ao longo da minha jornada.',
      technologies: 'Html - CSS - TypeScript - Angular-19 - Deploye Vercel',
      image: 'img/img-p4.jpg',
      link: 'https://portifolio2-0-mu.vercel.app/',
      category: 'Angular',
    },
    {
      title: 'To-do list',
      description:
        'Estou desenvolvendo uma aplicação de To-Do List utilizando Node.js, com o objetivo de criar uma ferramenta simples e eficiente para gerenciar tarefas diárias. O projeto é uma aplicação backend que permite aos usuários adicionar, editar, excluir e listar suas tarefas, de forma intuitiva e funcional.',
      technologies: 'Node.js - GitHub',
      image: 'img/img-p5.jpg',
      link: 'https://github.com/Silvio-Hub/NP-todolist-backend',
      category: 'Node-js',
    },
    {
      title: 'Gestão de vagas',
      description:
        'Este é um sistema de gestão de vagas desenvolvido em Java, com o objetivo de organizar e otimizar o processo de reserva, controle e gerenciamento de vagas em diferentes contextos, como estacionamentos, eventos ou espaços compartilhados. A aplicação foi criada para ser uma solução eficiente e de fácil utilização, tanto para administradores quanto para usuários finais.',
      technologies: 'Java - GitHub',
      image: 'img/img-p6.jpg',
      link: 'https://github.com/Silvio-Hub/gestao_vagas',
      category: 'Java',
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
