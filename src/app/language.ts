import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  private readonly STORAGE_KEY = 'language';
  private readonly FALLBACK_LANG = 'en';

  constructor(private translate: TranslateService) {}

  init(){
    const savedLang = localStorage.getItem(this.STORAGE_KEY) || this.FALLBACK_LANG;
    this.translate.use(savedLang);
  }

   get currentLanguage(): string {
    return this.translate.currentLang || this.FALLBACK_LANG;
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
  }
}
