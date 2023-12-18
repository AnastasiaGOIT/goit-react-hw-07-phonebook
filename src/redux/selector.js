import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => {
  return state.contacts.items;
};

export const getFilter = state => {
  return state.filter.filter;
};

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name &&
        typeof contact.name === 'string' &&
        contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
