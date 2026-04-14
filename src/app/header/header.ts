import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() siteTitle: string = '';
  @Output() darkModeToggled = new EventEmitter<void>();

  toggleDarkMode() {
    this.darkModeToggled.emit();
  }
}