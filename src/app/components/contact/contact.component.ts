import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input() showFooter: boolean = true;
  @ViewChild('nameInput') nameInput: ElementRef | undefined;
  successMessage: string = '';
  errorMessage: string = '';

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl('', [Validators.required]),
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, message, phone, subject } = this.contactForm.value;
      emailjs
        .send(
          'service_py7zmdh',
          'template_b7zel1v',
          {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
          },
          '3_MtqAxYT9fAwshfg'
        )
        .then(
          (response) => {
            this.successMessage = 'Sua mensagem foi enviada com sucesso!';
            this.errorMessage = '';
            this.contactForm.reset();
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          },
          (error) => {
            this.errorMessage =
              'Houve um erro ao enviar sua mensagem. Tente novamente.';
            this.successMessage = '';
            setTimeout(() => {
              this.errorMessage = '';
            }, 5000);
          }
        );
    } else {
      this.successMessage = '';
      this.errorMessage =
        'Por favor, preencha todos os campos obrigatórios corretamente.';

      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
    }
  }
}
