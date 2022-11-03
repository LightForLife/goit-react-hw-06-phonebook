import { createAction, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const filterContacts = createAction('contacts/filterContact');

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
// payload: {
//   id: nanoid(),
//   name,
//   number,
// },
//   };
// };

// export const deleteContact = contactId => {
//   return { type: 'contacts/deleteContact', payload: contactId };
// };

// export const filterContacts = searchText => {
//   return { type: 'contacts/filterContact', payload: searchText };
// };
