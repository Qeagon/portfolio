import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Body} from './body/body';
import { Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Body, Footer], // ← geen quotes!
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('matt-farley');
}