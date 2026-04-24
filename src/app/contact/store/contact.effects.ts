import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { submitContact, submitContactSuccess } from './contact.actions';

@Injectable()
export class ContactEffects {
  private actions$ = inject(Actions); // 👈 inject() gebruiken

  submit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submitContact),
      switchMap(() =>
        of(submitContactSuccess()).pipe(
          delay(40000)
        )
      )
    )
  );
}
