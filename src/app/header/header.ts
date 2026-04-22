import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Language } from '../language';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, TranslateModule, SelectButtonModule, ReactiveFormsModule],
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

  languageControl = new FormControl('');

  constructor(private language: Language) {
    this.languageControl.setValue(this.language.currentLanguage);

    this.languageControl.valueChanges.subscribe(lang => {
      if (lang) this.language.setLanguage(lang);
    });
  }

  toggleDarkMode() {
    this.darkModeToggled.emit();
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}