import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return { type: 'contacts/deleteContact', payload: contactId };
};

export const filterContacts = searchText => {
  return { type: 'contacts/filterContact', payload: searchText };
};
