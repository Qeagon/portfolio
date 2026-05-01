import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ContactActions } from './contact.actions';
import { catchError, map } from 'rxjs/operators';
import { ContactService } from '../contact.service';

@Injectable()
export class ContactEffects {
  private actions$ = inject(Actions);
  private contactService = inject(ContactService);

  submit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.submit),
      switchMap(({ name, email, message }) =>
        this.contactService.send(name, email, message).pipe(
          map(() => ContactActions.submitSuccess()),
          catchError((err) => of(ContactActions.submitFailure({ error: err.message }))),
        ),
      ),
    ),
  );
}
