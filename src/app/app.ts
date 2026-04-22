import { Component, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Renderer2 } from '@angular/core';
import { Header } from './header/header';
import { Body } from './body/body';
import { Footer } from './footer/footer';
import { Language } from './language';

@Component({
  selector: 'app-root',
  imports: [Header, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('matt-farley');

  isDarkMode = signal((() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return stored ? stored === 'dark' : prefersDark;
  })());

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private renderer: Renderer2,
    private languageservice : Language
  ) {
    this.languageservice.init();

    if (this.isDarkMode()) {
      this.renderer.addClass(this.doc.documentElement, 'my-app-dark');
    }
  }

  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    const method = this.isDarkMode() ? 'addClass' : 'removeClass';
    this.renderer[method](this.doc.documentElement, 'my-app-dark');
  }

  avatarImage = 'mf-avatar.svg';
  socialLinks = [
    { icon: 'pi pi-instagram', url: 'https://instagram.com' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com' },
    { icon: 'pi pi-github', url: 'https://github.com' },
  ];
}
