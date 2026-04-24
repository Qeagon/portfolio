import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactState } from './contact.reducer';

export const selectContactState = createFeatureSelector<ContactState>('contact');

export const selectPending = createSelector(selectContactState, state => state.pending);
export const selectSuccess = createSelector(selectContactState, state => state.success);
export const selectError = createSelector(selectContactState, state => state.error);
