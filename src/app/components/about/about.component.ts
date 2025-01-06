import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
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
    this.isOpenModal = false;
  }
}
