import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Body} from './body/body';
import { Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Body, Footer], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
protected readonly title = signal('matt-farley');
  socialLinks = [
     { icon: 'insta-logo.png', url: 'https://instagram.com' },
    { icon: 'insta-logo.png', url: 'https://twitter.com' },
    { icon: 'insta-logo.png', url: 'https://github.com' },
  ];

  siteTitle = 'Matt Farley';
  avatarImage = 'mf-avatar.svg';
}