import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
    { id: 'id-2', name: 'Boris Johnson', number: '443-89-12' },
    { id: 'id-3', name: 'Beyonse Knowles', number: '645-17-79' },
    { id: 'id-4', name: 'Bill Gates', number: '227-91-26' },
  ],
};

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return { items: [action.payload, ...state.items] };
    case 'contacts/deleteContact':
      return {
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

const filterInitialState = {
  filterValue: '',
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'contacts/filterContact': {
      return {
        ...state,
        filterValue: action.payload,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
