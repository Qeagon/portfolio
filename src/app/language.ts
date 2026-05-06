import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class Language {
  private readonly STORAGE_KEY = 'language';
  private readonly FALLBACK_LANG = 'en';

  constructor(
    private translate: TranslateService,
    private title: Title,
  ) {}

  init() {
    const savedLang = localStorage.getItem(this.STORAGE_KEY) || this.FALLBACK_LANG;
    this.apply(savedLang);
  }

  get currentLanguage(): string {
    return this.translate.currentLang || this.FALLBACK_LANG;
  }

  setLanguage(lang: string) {
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.apply(lang);
  }

  private apply(lang: string) {
    this.translate.use(lang);
    document.documentElement.lang = lang;
    this.title.setTitle(lang === 'nl' ? 'Matt Farley - Portfolio' : 'Matt Farley - Portfolio');
  }
}
