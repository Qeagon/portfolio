import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { contactFeature } from './contact/store/contact.feature';
import { ContactEffects } from './contact/store/contact.effects';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./body/body').then((m) => m.Body) },
  {
    path: 'contact',
    providers: [provideState(contactFeature), provideEffects([ContactEffects])],
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
];
