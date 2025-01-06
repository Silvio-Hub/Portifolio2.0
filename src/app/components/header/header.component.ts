import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpen: boolean = false;
  @Output() menuToggle = new EventEmitter<void>();

  menu_icon: string = 'bx bx-menu';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

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

  toggleMenu() {
    this.menuToggle.emit();
    this.menu_icon = this.isMenuOpen ? 'bx bx-menu' : 'bx bx-x';
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.menu_icon = 'bx bx-menu';
    this.menuToggle.emit();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const menuElement =
      this.elementRef.nativeElement.querySelector('.navbar__links');
    const menuButton =
      this.elementRef.nativeElement.querySelector('.navbar__menu');

    if (
      this.isMenuOpen &&
      !menuElement.contains(event.target as Node) &&
      !menuButton.contains(event.target as Node)
    ) {
      this.closeMenu();
    }
  }

  @HostListener('click', ['$event'])
  onMenuClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
