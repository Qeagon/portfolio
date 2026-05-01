import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const ContactActions = createActionGroup({
  source: 'Contact',
  events: {
    Submit: props<{ name: string; email: string; message: string }>(),
    'Submit Success': emptyProps(),
    'Submit Failure': props<{ error: string }>(),
    reset: emptyProps(),
  },
});
