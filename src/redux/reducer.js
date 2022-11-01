import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
  { id: 'id-2', name: 'Boris Johnson', number: '443-89-12' },
  { id: 'id-3', name: 'Beyonse Knowles', number: '645-17-79' },
  { id: 'id-4', name: 'Bill Gates', number: '227-91-26' },
];
const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [action.payload, ...state];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = {
  filter: '',
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'contacts/filterContact': {
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(action.payload)
        ),
        filter: action.payload,
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
