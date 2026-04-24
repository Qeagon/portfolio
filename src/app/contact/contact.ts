import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { submitContact } from './store/contact.actions';
import { selectPending, selectSuccess } from './store/contact.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    ProgressBarModule,
    AsyncPipe
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
    private store = inject(Store);
        pending$ = this.store.select(selectPending);
        success$ = this.store.select(selectSuccess);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  constructor() {}

  submit() {
    if (this.form.valid) {
      const { name, email, message } = this.form.value;
      this.store.dispatch(submitContact({
        name: name!,
        email: email!,
        message: message!
      }));
    }
  }
}
