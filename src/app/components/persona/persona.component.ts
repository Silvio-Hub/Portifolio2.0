import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-persona',
  imports: [CommonModule, ContactComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss',
})
export class PersonaComponent {
  downloadCV() {
    const resumePtah = 'doc/Curriculo.pdf';

    const link = document.createElement('a');
    link.href = resumePtah;
    link.download = 'Curriculo.pdf';
    link.click();
  }

  openWhatsApp() {
    const phoneNumber = '+55 11 99652-6874';
    const message = 'Olá! Tudo bem?';
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(urlWhatsApp, '_blank');
  }

  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;
  isOpenModal: boolean = false;

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const modal = this.modalContent?.nativeElement;
    if (modal && !modal.contains(event.target as Node) && this.isOpenModal) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onEscPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    const confirmClose = window.confirm(
      'Tem certeza de que deseja fechar sem enviar o formulário? Qualquer informação não salva será perdida'
    );
    if (confirmClose) {
      this.isOpenModal = false;
    }
  }
}
