import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Language } from '../language';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, TranslateModule, SelectButtonModule, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  siteTitle = input<string>('');
  isDark = input<boolean>(false);
  darkModeToggled = output<void>();

  languages = [
    { label: '🇬🇧 EN', value: 'en' },
    { label: '🇳🇱 NL', value: 'nl' },
  ];

  languageControl = new FormControl('');

  constructor(
    private language: Language,
    private router: Router,
  ) {
    this.languageControl.setValue(this.language.currentLanguage);

    this.languageControl.valueChanges.pipe(takeUntilDestroyed()).subscribe((lang) => {
      if (lang) this.language.setLanguage(lang);
    });
  }

  toggleDarkMode() {
    this.darkModeToggled.emit();
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
