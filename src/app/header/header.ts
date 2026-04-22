import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [ButtonModule, TranslateModule, SelectButtonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  siteTitle = input<string>('');
  isDark = input<boolean>(false);
  darkModeToggled = output<void>();

  languages = [
    { label: '🇬🇧 EN', value: 'en' },
    { label: '🇳🇱 NL', value: 'nl' }
  ];

  selectedLanguage: string;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.selectedLanguage = savedLang;
    this.translate.use(savedLang);
  }

  switchLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  toggleDarkMode() {
    this.darkModeToggled.emit();
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
