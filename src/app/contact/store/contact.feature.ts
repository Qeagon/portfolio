import { createFeature, createReducer, on } from '@ngrx/store';
import { ContactActions } from './contact.actions';

export interface ContactState {
  pending: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: ContactState = {
  pending: false,
  success: false,
  error: null,
};

export const contactFeature = createFeature({
  name: 'contact',
  reducer: createReducer(
    initialState,
    on(ContactActions.submit, (state) => ({
      ...state,
      pending: true,
      success: false,
      error: null,
    })),
    on(ContactActions.submitSuccess, (state) => ({ ...state, pending: false, success: true })),
    on(ContactActions.submitFailure, (state, { error }) => ({ ...state, pending: false, error })),
    on(ContactActions.reset, (state) => ({ ...state, success: false, error: null })),
  ),
});

export const { selectPending, selectSuccess, selectError } = contactFeature;
