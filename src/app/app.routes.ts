import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Body } from './body/body';

export const routes: Routes = [
    {path : '', component: Body},
  { path: 'contact', component: Contact },
];
