import { createFeature, createReducer, on } from '@ngrx/store';
import { submitContact, submitContactSuccess, submitContactFailure } from './contact.actions';

export interface ContactState {
  pending: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: ContactState = {
  pending: false,
  success: false,
  error: null
};

export const contactFeature = createFeature({
  name: 'contact',
  reducer: createReducer(
    initialState,
    on(submitContact, state => ({ ...state, pending: true, success: false, error: null })),
    on(submitContactSuccess, state => ({ ...state, pending: false, success: true })),
    on(submitContactFailure, (state, { error }) => ({ ...state, pending: false, error }))
  )
});

export const { selectPending, selectSuccess, selectError } = contactFeature;
