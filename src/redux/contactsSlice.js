import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
    { id: 'id-2', name: 'Boris Johnson', number: '443-89-12' },
    { id: 'id-3', name: 'Beyonse Knowles', number: '645-17-79' },
    { id: 'id-4', name: 'Bill Gates', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return { items: [action.payload, ...state.items] };
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        return {
          items: state.items.filter(contact => contact.id !== action.payload),
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
