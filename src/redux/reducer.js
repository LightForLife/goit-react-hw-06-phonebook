import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addContact, deleteContact, filterContacts } from './actions';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
    { id: 'id-2', name: 'Boris Johnson', number: '443-89-12' },
    { id: 'id-3', name: 'Beyonse Knowles', number: '645-17-79' },
    { id: 'id-4', name: 'Bill Gates', number: '227-91-26' },
  ],
};

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return { items: [action.payload, ...state.items] };
  },
  [deleteContact]: (state, action) => {
    return {
      items: state.items.filter(contact => contact.id !== action.payload),
    };
  },
});

const filterInitialState = {
  filterValue: '',
};

export const filterReducer = createReducer(filterInitialState, {
  [filterContacts]: (state, action) => {
    return {
      ...state,
      filterValue: action.payload,
    };
  },
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
