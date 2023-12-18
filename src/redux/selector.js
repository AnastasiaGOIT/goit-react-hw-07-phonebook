export const getContacts = state => {
  return state.contacts.items;
};

export const getFilter = state => {
  return state.filter.filter;
};

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

let normalized = getFilter ? getFilter.toLowerCase() : '';
export const visibleContacts = getContacts.filter(
  contact =>
    contact.name &&
    typeof contact.name === 'string' &&
    contact.name.toLowerCase().includes(normalized)
);
