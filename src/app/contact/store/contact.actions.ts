import { createAction, props } from "@ngrx/store";

export const submitContact = createAction (
    '[Contact] Submit',
    props<{name: string ; email: string ; message: string;}>()
);

export const submitContactSuccess = createAction('[contact] submit Success');

export const submitContactFailure = createAction(
    '[Contact] Submit Failure',
    props<{ error : string }>()
);
