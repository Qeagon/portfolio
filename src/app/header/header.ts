import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  siteTitle = input<string>('');
  isDark = input<boolean>(false);
  darkModeToggled = output<void>();

  toggleDarkMode() {
    this.darkModeToggled.emit();
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}